export abstract class ExpressionContainer implements debug.IExpressionContainer {
    public getChildren(debugService: debug.IDebugService): TPromise<debug.IExpression[]> {
        if (!this.cacheChildren || !this.children) {
            const session = debugService.activeSession;
            // only variables with reference > 0 have children.
            if (!session || this.reference <= 0) {
                this.children = TPromise.as([]);
            } else {

                // Check if object has named variables, fetch them independent from indexed variables #9670
                this.children = (!!this.namedVariables ? this.fetchVariables(session, undefined, undefined, 'named') : TPromise.as([])).then(childrenArray => {
                    // Use a dynamic chunk size based on the number of elements #9774
                    let chunkSize = ExpressionContainer.BASE_CHUNK_SIZE;
                    while (this.indexedVariables > chunkSize * ExpressionContainer.BASE_CHUNK_SIZE) {
                        chunkSize *= ExpressionContainer.BASE_CHUNK_SIZE;
                    }

                    if (this.indexedVariables > chunkSize) {
                        // There are a lot of children, create fake intermediate values that represent chunks #9537
                        const numberOfChunks = Math.ceil(this.indexedVariables / chunkSize);
                        for (let i = 0; i < numberOfChunks; i++) {
                            const start = this.startOfVariables + i * chunkSize;
                            const count = Math.min(chunkSize, this.indexedVariables - i * chunkSize);
                            childrenArray.push(new Variable(this, this.reference, `[${start}..${start + count - 1}]`, '', null, count, null, true, start));
                        }

                        return childrenArray;
                    }

                    const start = this.getChildrenInChunks ? this.startOfVariables : undefined;
                    const count = this.getChildrenInChunks ? this.indexedVariables : undefined;
                    return this.fetchVariables(session, start, count, 'indexed')
                        .then(variables => arrays.distinct(childrenArray.concat(variables), child => child.name));
                });
            }
        }

        return this.children;
    }
}
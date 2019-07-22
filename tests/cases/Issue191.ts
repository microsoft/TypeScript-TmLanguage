class Thing {
    constructor(public content: string){
        var prop = Q.defer<boolean>();
        this.store = new Data();
        gaze(path.join(this.content, "**/*.json"), (err, watch) => {
            process.stuout.write(`Watching for changes in:`);
        })
    };
}

class Thing<T, U> {
    constructor(public content: string){
        var prop = Q.defer<boolean>();
        this.store = new Data();
        gaze(path.join(this.content, "**/*.json"), (err, watch) => {
            process.stuout.write(`Watching for changes in:`);
        })
    };
}

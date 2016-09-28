    function createBinder(): (file: SourceFile, options: CompilerOptions) => void {
        let Symbol: { new (flags: SymbolFlags, name: string): Symbol };
        let classifiableNames: Map<string>;

        const unreachableFlow: FlowNode = { flags: FlowFlags.Unreachable };
    }
    this.Then(
        /^display prompt in branch "([^"]*)"$/,
        async function (branchName) {
            const expected = application.prompt(branchName);
            const actual = await application.getOnceOut();
            expect(actual).to.be.equal(expected);
        }
    );

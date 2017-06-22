import fs = require('fs');
import chai = require('chai');

function getFileText(file: string) {
    return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : undefined;
}

describe("Compare generated with baselines", () => {
    for (var file of fs.readdirSync('generated')) {
        var generatedText = getFileText('generated/' + file);
        var baselinesText = getFileText('baselines/' + file);

        addTestCase(file, generatedText, baselinesText);
    }
})

function addTestCase(file: string, generatedText: string, baselinesText: string) {
    it('Comparing ' + file, () => {
        if (baselinesText === undefined) {
            chai.assert(false, "Extra generated baseline");
        }
        else {
            chai.assert.equal(generatedText, baselinesText, "Expected baselines to match");
        }
    });
}
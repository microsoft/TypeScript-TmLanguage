import fs = require('fs');
import chai = require('chai');

function compareText(text1: string, text2: string, ignoreWhiteSpace = true, ignoreNewLine = true){
    text1 = text1.split('\r\n').join('').split('\n').join('');
    text2 = text2.split('\r\n').join('').split('\n').join('');
    return text1 === text2;
}

describe("Compare generated with baselines", () => {
    for (var file of fs.readdirSync('generated')) {
        var generatedText = fs.readFileSync('generated/' + file, 'utf8');
        var baselinesText = fs.readFileSync('baselines/' + file, 'utf8');

        addTestCase(file, generatedText, baselinesText);
    }
})

function addTestCase(file: string, generatedText: string, baselinesText: string) {
    describe('Comparing ' + file, () => {
        it('should be the same', () => {
            chai.expect(compareText(generatedText, baselinesText)).to.true;
        })
    })    
}
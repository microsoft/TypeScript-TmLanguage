import fs = require('fs');
import path = require('path');
import chai = require('chai');
import build = require('./build');

const generatedFolder = "generated";
const baselineFolder = "baselines";

function ensureCleanGeneratedFolder() {
    if (fs.existsSync(generatedFolder)) {
        for (const fileName of fs.readdirSync(generatedFolder)) {
            fs.unlinkSync(path.join(generatedFolder, fileName));
        }
        fs.rmdirSync(generatedFolder);
    }
    fs.mkdirSync(generatedFolder);
}

// Ensure generated folder
ensureCleanGeneratedFolder();

// Generate the new baselines
for (const fileName of fs.readdirSync('cases')) {
    describe("Generating baseline for " + fileName, () => {
        it('Comparing generated', () => {
            const text = fs.readFileSync(path.join('./cases', fileName), 'utf8');
            const parsedFileName = path.parse(fileName);
            const { markerScopes, wholeBaseline } = build.generateScopes(text, parsedFileName);
            if (markerScopes) {
                assertBaselinesMatch(parsedFileName.name + '.txt', markerScopes);
            }
            assertBaselinesMatch(parsedFileName.name + '.baseline.txt', wholeBaseline);
        });
    });
}

function assertBaselinesMatch(file: string, generatedText: string) {
    const generatedFileName = path.join(generatedFolder, file);
    fs.writeFileSync(generatedFileName, generatedText);

    const baselineFile = path.join(baselineFolder, file);
    if (fs.existsSync(baselineFile)) {
        chai.assert.equal(generatedText, fs.readFileSync(baselineFile, 'utf8'), "Expected baselines to match: " + file);
    }
    else {
        chai.assert(false, "New generated baseline");
    }
}
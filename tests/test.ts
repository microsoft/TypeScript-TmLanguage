import fs = require('fs');
import path = require('path');
import chai = require('chai');
import build = require('./build');

const generatedFolder = path.join(__dirname, 'generated');
const baselineFolder = path.join(__dirname, 'baselines');
const casesFolder = path.join(__dirname, 'cases');

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
for (const fileName of fs.readdirSync(casesFolder)) {
    const text = fs.readFileSync(path.join(casesFolder, fileName), 'utf8');
    const parsedFileName = path.parse(fileName);

    let wholeBaseline: string;
    let markerScopes: string;

    describe("Generating baseline for " + fileName, () => {
        before(() =>  {
            const result = build.generateScopes(text, parsedFileName)
            wholeBaseline = result.wholeBaseline;
            markerScopes = result.markerScopes;
        });

        it('Comparing generated', () => {
            assertBaselinesMatch(parsedFileName.name + '.baseline.txt', wholeBaseline);
        });

        it('Comparing generated scopes', () => {
            if (markerScopes) {
                assertBaselinesMatch(parsedFileName.name + '.txt', markerScopes);
            }
        });
    });
}

function assertBaselinesMatch(file: string, generatedText: string) {
    const generatedFileName = path.join(generatedFolder, file);
    fs.writeFileSync(generatedFileName, generatedText);

    const baselineFile = path.join(baselineFolder, file);
    if (fs.existsSync(baselineFile)) {
        chai.assert.equal(generatedText, fs.readFileSync(baselineFile, 'utf8'), "Expected baselines to match: " + file);
    } else {
        chai.assert(false, "New generated baseline");
    }
}
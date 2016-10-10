interface IOptions {
    check: boolean;
    files: string;
    primary: string;
}
var {
    check: isReportMode = false,
    files = '**/locals/*.json',
    primary: primaryLanguage = 'en'
}: IOptions = null;
function sync({
    check: isReportMode = false,
    files = '**/locals/*.json',
    primary: primaryLanguage = 'en'
}: IOptions) {
}

var [
    check2 = false,
    files2 = '**/locals/*.json',
    primary2 = 'en'
] = [];
function sync2([
    check2 = false,
    files2 = '**/locals/*.json',
    primary2 = 'en'
]) {
}
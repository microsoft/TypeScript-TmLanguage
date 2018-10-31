const  func2 = (url: string)
: Promise<any> => {
    return new Promise((accept, reject) => {
        const text = window.prompt();
        accept(text);
    });
}
const  func2a = (url)
: Promise<any> => {
    return new Promise((accept, reject) => {
        const text = window.prompt();
        accept(text);
    });
}
function main(url: string)
: Promise<any> {
    return new Promise((accept, reject) => {
        const text = window.prompt();
        accept(text);
    });
}
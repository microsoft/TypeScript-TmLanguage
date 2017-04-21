var test = "123 456";

if ((test.match(/\d+/g)[0]) / (test.match(/\d+/g)[1]) < 1) {
    return;
}

if ((test.match(/\d+/g)[0])/(test.match(/\d+/g)[1]) < 1) {
    return;
}
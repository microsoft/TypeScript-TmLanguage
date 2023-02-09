class TestClass {
  veryVeryVeryVeryVeryVeryVeryVeryLongName = true;
  veryVeryVeryVeryLongName: string;

  test = () =>
    !this.veryVeryVeryVeryVeryVeryVeryVeryLongName ||
    (!!this.veryVeryVeryVeryLongName && this.veryVeryVeryVeryLongName === 'veryVeryVeryVeryLongString');
}
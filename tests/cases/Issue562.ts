// @onlyOwnGrammar - As this has cast
yield <ClassD>10;
(yield <ClassD>10);
function foo() {
  return <ClassD>10;
}
topYields.sort ((share1,share2) => {
    if (share1.yield < share2.yield) { return 1; }
    if (share1.yield > share2.yield) { return -1; }
    return 0;
  });

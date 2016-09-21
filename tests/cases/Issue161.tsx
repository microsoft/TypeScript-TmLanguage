// @onlyOwnGrammar - As this has jsx
let root: React.ReactElement<{}>;
let page: PageName;
if (isViaPage) {
  root = <ViaView/>;
  page = 'via';
}
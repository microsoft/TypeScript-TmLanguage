let root: React.ReactElement<{}>;
let page: PageName;
if (isViaPage) {
  root = <ViaView/>;
  page = 'via';
}
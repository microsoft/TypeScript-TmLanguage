function formatBigNum(num) {
  num = Number(num)
  if (num < 10000) {
    return num
  }
  return (num/10000).toString().replace(/(\.[\d]{1})\d+$/,"$1") + 'w '
}
let hbAnimIndex = 0;
let hbAnimNode = null;
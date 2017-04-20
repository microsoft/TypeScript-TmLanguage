function merge(as, bs) {
  let res = []
  let ia = 0
  let ib = 0
  while (ia < as.length && ib < bs.length) { // coloring broken
    if (as[ia] < bs[ib]) {
      res.push(as[ia++]) // coloring broken
    } else {
      res.push(bs[ib++]) // coloring broken
    }
  }
  return res.concat(as.slice(ia)).concat(bs.slice(ib)) // coloring broken
}

function mergesort(array) {
  if (array.length < 2) {
    return array
  }
  const mid = Math.floor(array.length / 2)
  return merge(mergesort(array.slice(0, mid)), mergesort(array.slice(mid)))
}
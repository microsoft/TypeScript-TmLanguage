res.sendfile = deprecate.function(res.sendfile,
  'res.sendfile: Use res.sendFile instead');

// some comment

res.download = function download(path, filename, fn) {
  // something
}
/* jshint esnext:true */
let it = require('./it');
it.execute(function* builder(options) {
   let metaData = yield it.read(option.metaFile);
   it.meta = yield it.parse(metaData, {
      ICON: yield it.read(options.icon),
      ICON64: (yield it.read(options.icon64)).base64()
   });
});
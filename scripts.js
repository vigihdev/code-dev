const out = require("./out/index");
let str = "Test Text all js";
let arr = ['1','2','3','4'];

console.log("fo");
console.log(out.camelCase(str));
console.log(out.upperCase(str));
console.log(out.arrays.lastIndex(arr,() => true));
console.log(out.arrays.first(arr,() => true));
console.log(out.types.isArray([]));
console.log('go /go'.match(out.strings.createRegExp('/go',true,{global:true})));

out.assert.ok(out.types.isBoolean(true));
out.assert.ok(out.strings.trim('....Trim','.') === 'Trim');
out.assert.ok(out.strings.ltrim('....Trim','.') === 'Trim');
out.assert.ok(out.strings.ltrim('/gooo','/') === 'gooo');
out.assert.ok(out.strings.createRegExp('/go',true,{global:true}).test('/gooooo') === true);


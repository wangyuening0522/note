const { log } = require('console');
const path=require('path');
var dirname=path.resolve(__dirname)
var filename=path.resolve(__filename)
var curDir=process.cwd()
//extname返回拓展名  basename返回路径最后一部分
var name=path.extname('/foo/bar/baz/asdf/quux.html');
console.log('name',name);
console.log("_dirname===",dirname);
console.log('_filename===',filename);
console.log('doNodeDir===',curDir);
//讲解笔记：https://juejin.cn/post/6844903949128957960

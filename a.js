//require是一個方法
//用來加載模型
//在node中有三種模型
//1.具名核心模型
//2.自定義模型
//3.
//在node中,沒有全作用域，只有模組作用域（文件作用域）

console.log('a start');

require('./b.js');

console.log('a end');
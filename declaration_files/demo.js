"use strict";
exports.__esModule = true;
var add = require('./a');
var a = function (p) {
    console.log(p);
};
add(1, 2);
// add(1, '2') //报错，Argument of type '"2"' is not assignable to parameter of type 'number'.
exports["default"] = a;
//打包的时候运行命令tsc demo.ts -d，生产demo.d.ts文件

"use strict";
exports.__esModule = true;
var add = require('./a');
var a_js_1 = require("./a.js"); //需要创建对应的a.d.ts文件
var a = function (p) {
    console.log(p);
};
add(1, 2);
// add(1, '2') //报错，Argument of type '"2"' is not assignable to parameter of type 'number'.
a_js_1["default"](1, 1);
// add1(1,'1') //报错，Argument of type '"1"' is not assignable to parameter of type 'number'
console.log(a_js_1.add2(1));
// aaa('1') //报错，Argument of type '"1"' is not assignable to parameter of type 'number'
exports["default"] = a;
//打包的时候运行命令tsc demo.ts -d，生产demo.d.ts文件

"use strict";
exports.__esModule = true;
var add = require('./a');
var a_js_1 = require("./a.js"); //需要创建对应的a.d.ts文件
// import React from 'react' //给React附值的时候需要写成下面这种形式
var React = require("react");
// 如果不声明declare module 'react' { const xxx: number}
//报错，Property 'xxx' does not exist on type 'typeof React'
console.log(React.xxx); //let xxx: number, 注意：React.xxx不能改
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
// 如果不声明declare global { interface Window {}}
// 就会报错， Property 'server' does not exist on type 'Window'
window.server = {
    host: 'server'
};

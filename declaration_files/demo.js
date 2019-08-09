"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add = require('./a');
var a = function (p) {
    console.log(p);
};
console.log(add(1, 2));
exports.default = a;
//打包的时候运行命令tsc demo.ts -d，生产demo.d.ts文件
//# sourceMappingURL=demo.js.map
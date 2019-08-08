var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Calc = /** @class */ (function () {
    function Calc(n) {
        this.value = n;
    }
    Calc.prototype.add = function (n) {
        this.value += n;
        return this; //返回当前的实例
    };
    Calc.prototype.multiple = function (n) {
        this.value *= n;
        return this; //Calc | BiggerCalc 多态，this既可以指向父类，也可以指向子类
    };
    return Calc;
}());
var BiggerCalc = /** @class */ (function (_super) {
    __extends(BiggerCalc, _super);
    function BiggerCalc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BiggerCalc.prototype.sin = function () {
        this.value = Math.sin(this.value);
        return this; //Calc | BiggerCalc 多态，this既可以指向父类，也可以指向子类
    };
    return BiggerCalc;
}(Calc));
var b = new Calc(2);
b.add(1).add(2).multiple(2);
console.log(b.value);
var c = new BiggerCalc(1);
c.add(1).multiple(2).sin();
console.log(c);

//泛型：用一个东西表示广泛的类型
function returnIt(sth) {
    return sth;
}
var s = returnIt('2'); //
function returnSth(sth) {
    return sth;
}
var sth2 = returnSth; //另外一种写法
var sth = returnSth('str'); //这里的<string>可以显示的指定实参必须是什么类型，也可以不写
var arr2 = ['1', '2', '3']; //也是泛型
function returnArr(arr) {
    return arr;
}
var arr = returnArr([1, 2, 3]);
var arr1 = returnArr([{ name: 'hby', age: 14 }, { name: 'hanbaoyi', age: 14 },]);
var add = function (a, b) { return a + b; };
add(1, 2);
var addAny = function (a, b) { return a + b; };
console.log(addAny('1', '2')); //12
var addAny1 = function (a, b) { return a + b; };
console.log(addAny1(1, 2)); //3
function returnSth2(sth) {
    console.log(sth.length);
    return sth;
}
// 在泛型里使用类
function create(c) {
    return new c();
}
var Human = /** @class */ (function () {
    function Human() {
    }
    return Human;
}());
var createHuman = create(Human);

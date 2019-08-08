// 使用索引类型，编译器就能够检查使用了动态属性名的代码。
// 例如，一个常见的JavaScript模式是从对象中选取属性的子集。
var calendar = function (option) { };
calendar({ time: Date.now(), view: 'year', arr: [1, 2, 3] });
//从object中取出key属性,但是可能取的key属性并不存在object里
// function pluck(object: any, keys: Array<'name' | 'age'>) {} //Array<'name' | 'age'>无法写全
function pluck(object, keys) {
    //T是object的类型 -> {name:string,age:number,gender:number}
    //keyof T是object的key -> 'name' | 'age' | 'gender'
    //K extends keyof T === 'name' | 'age' | 'gender'
    //Array<K> keys数组里面是'name'或'age'或'gender'
    return keys.map(function (key) { return object[key]; }); //['hby', 18, 100] => Array<string|number>
}
pluck({ name: 'hby', age: 18, gender: 100 }, ['name', 'age', 'gender']);

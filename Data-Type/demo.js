//数据类型
{
    var a = null;
    var b = undefined;
    var c = 'c';
    var d = true;
    var e = 32;
    var f = { name: 'hanbaoyi' };
    var g = 1;
    g = '1';
}
//枚举,只能选择枚举里的其中一项
{
    var Gender = void 0;
    (function (Gender) {
        Gender[Gender["Man"] = 0] = "Man";
        Gender[Gender["Woman"] = 1] = "Woman";
        Gender["Dog"] = "dog";
    })(Gender || (Gender = {}));
    var gender = Gender.Man;
    console.log(gender); // 0
    gender = Gender.Woman;
    console.log(gender); // 1
    gender = Gender.Dog;
    console.log(gender); // dog
}
//void 没有返回值，相当于返回undefined
{
    function fn(x) {
        console.log(x);
    }
    var n = fn(2);
    console.log(n); //undefined
}
//显示的类型转换
{
    var a = '123';
    var b = parseInt(a);
    console.log(b); //123
    var c = 123;
    var d = a.toString();
    console.log(d); //'123'
    var e = 0;
    var f = Boolean(e); // let f:boolean = !!e
    console.log(f); //false
    var obj = { "name": 'hanbaoyi', "age": 28 };
    var str = obj.toString(); //"object Object"
    var str1 = JSON.stringify(obj); //"{name: 'hanbaoyi', age: 28}"
    console.log(str);
    console.log(str1);
    var str2 = '{"name": "hanbaoyi", "age": 28}';
    var obj1 = JSON.parse(str2); //{name: 'hanbaoyi', age: 28}
    console.log(str2);
    console.log(obj1);
}
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。

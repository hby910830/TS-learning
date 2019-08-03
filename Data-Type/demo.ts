//数据类型
{
    let a: null = null
    let b: undefined = undefined
    let c: string = 'c'
    let d: boolean = true
    let e: number = 32
    let f: object = {name: 'hanbaoyi'}
    let g: any = 1
    g = '1'
}

//枚举,只能选择枚举里的其中一项
{
    enum Gender {
        Man,
        Woman,
        Dog = 'dog'
    }

    let gender: Gender = Gender.Man
    console.log(gender); // 0
    gender = Gender.Woman
    console.log(gender); // 1
    gender = Gender.Dog
    console.log(gender);    // dog

}

//void 没有返回值，相当于返回undefined
{
    function fn(x: any): void {
        console.log(x);
    }

    let n = fn(2)
    console.log(n); //undefined
}

//显示的类型转换
{
    let a:string = '123'
    let b:number = parseInt(a)
    console.log(b); //123

    let c:number = 123
    let d:string= a.toString()
    console.log(d);//'123'

    let e:number = 0
    let f:boolean = Boolean(e) // let f:boolean = !!e
    console.log(f); //false

    let obj:object = {"name": 'hanbaoyi', "age": 28}
    let str:string = obj.toString() //"object Object"
    let str1:string = JSON.stringify(obj) //"{name: 'hanbaoyi', age: 28}"
    console.log(str);
    console.log(str1);

    let str2:string = '{"name": "hanbaoyi", "age": 28}'
    let obj1:object = JSON.parse(str2)  //{name: 'hanbaoyi', age: 28}
    console.log(str2);
    console.log(obj1);
}


// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
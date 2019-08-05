//泛型：用一个东西表示广泛的类型

function returnIt(sth: any): any { //any,参数和返回值可以是任何类型，且两者类型可以不同
    return sth
}

let s = returnIt('2')  //


function returnSth<T>(sth: T): T { //<T>,占位符，代表泛型，参数和返回值可以是任何类型，且两者类型必须相同
    return sth
}

let sth2: <T>(sth: T) => T = returnSth   //另外一种写法

let sth = returnSth<string>('str') //这里的<string>可以显示的指定实参必须是什么类型，也可以不写


let arr2: Array<string> = ['1', '2', '3'] //也是泛型

function returnArr<T>(arr: T[]): T[] {  //T[]表示支持泛型数组
    return arr
}

interface Human {
    name: string
    age: number
}

let arr = returnArr([1, 2, 3])
let arr1 = returnArr<Human>([{name: 'hby', age: 14}, {name: 'hanbaoyi', age: 14},])


interface add {
    (a: number, b: number): number
}

let add: add = (a: number, b: number) => a + b
add(1, 2)

interface anyAdd<T> {
    (a: T, b: T): T
}

let addAny: anyAdd<string> = (a: string, b: string): string => a + b
console.log(addAny('1', '2')) //12
let addAny1: anyAdd<number> = (a: number, b: number): number => a + b
console.log(addAny1(1, 2)) //3


//泛型约束
interface hasLength {
    length: number
}
function returnSth2<T extends hasLength>(sth:T):T{  //对泛型约束必须有length属性
    console.log(sth.length);
    return sth
}

// 在泛型里使用类
function create<T>(c: {new (): T}) {
    return new c()
}

class Human{}

let createHuman = create<Human>(Human)



interface A {
  name: string,
  age: number;
}

interface B {
  gender: string;
}


const man: A & B = {//并且类型运算，缺一不可
  name: 'hby',
  age: 18,
  gender: 'male'
}

const woman: A | B = { //或类型运算，两者满足其一或全满足都可以
  name: 'hby',
  age: 18
}

const human: A | B = {
  gender: 'human'
}

console.log(woman);
console.log(human);
console.log(man);

// function add(a: string | number, b: string | number) {  报错
//   return a + b
// }
// function add<T>(a: T , b: T) {  泛型，报错
//   return a + b
// }

//函数重载
function add(a: string, b: string): string
function add(a: number, b: number): number
function add(a: any, b: any) {
  return a + b
}

console.log(add(1, 2))
console.log(add('1', '2'))
// console.log(add(1, '2'))  报错


//type,别类型起一个别名
const name1:string = 'hanbaoyi2'
console.log(name1);

type Name = string
const name2:Name = 'hanbaoyi'
console.log(name2);

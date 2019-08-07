interface A {
  name: string;
  age: number
}

interface B {
  gender: string
}


const man: A & B = {//并且类型运算，缺一不可
  name: 'hby',
  age: 18,
  gender: 'male'
}

console.log(man);
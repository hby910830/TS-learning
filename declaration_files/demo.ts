// import add from './a'
interface V {
  (a: number, b: number): number
}

const add: V = require('./a')

export interface Person {
  name: string;
  age: number
}

const a = function (p: Person) {
  console.log(p);
}

add(1, 2)
// add(1, '2') //报错，Argument of type '"2"' is not assignable to parameter of type 'number'.

export default a

//打包的时候运行命令tsc demo.ts -d，生产demo.d.ts文件

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

console.log(add(1, 2))

export default a

//打包的时候运行命令tsc demo.ts -d，生产demo.d.ts文件

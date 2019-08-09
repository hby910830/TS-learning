interface V {
  (a: number, b: number): number
}

const add: V = require('./a')
import add1 from './a.js' //需要创建对应的a.d.ts文件

export interface Person {
  name: string;
  age: number
}

const a = function (p: Person) {
  console.log(p);
}

add(1, 2)
// add(1, '2') //报错，Argument of type '"2"' is not assignable to parameter of type 'number'.
add1(1,1)
// add1(1,'1') //报错，Argument of type '"1"' is not assignable to parameter of type 'number'
export default a

//打包的时候运行命令tsc demo.ts -d，生产demo.d.ts文件

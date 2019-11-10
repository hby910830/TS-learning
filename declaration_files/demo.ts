import {Attributes} from "react";

interface V {
  (a: number, b: number): number
}

const add: V = require('./a')
import add1, {add2} from './a.js' //需要创建对应的a.d.ts文件

// import React from 'react' //给React附值的时候需要写成下面这种形式
import * as React from 'react'

declare module 'react' {
  const xxx: number;

  //扩展React本身自带的所有属性
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    styleName?: string
  }
}
// 如果不声明declare module 'react' { const xxx: number}
//报错，Property 'xxx' does not exist on type 'typeof React'
console.log(React.xxx) //let xxx: number, 注意：React.xxx不能改

export interface Person {
  name: string;
  age: number
}

const a = function (p: Person) {
  console.log(p);
}

add(1, 2)
// add(1, '2') //报错，Argument of type '"2"' is not assignable to parameter of type 'number'.
add1(1, 1)
// add1(1,'1') //报错，Argument of type '"1"' is not assignable to parameter of type 'number'
console.log(add2(1))
// aaa('1') //报错，Argument of type '"1"' is not assignable to parameter of type 'number'
export default a

//打包的时候运行命令tsc demo.ts -d，生产demo.d.ts文件


//修改window的属性
declare global {
  interface Window {
    server: {
      host: string
    }
  }
}

// 如果不声明declare global { interface Window {}}
// 就会报错， Property 'server' does not exist on type 'Window'
window.server = {
  host: 'server'
}

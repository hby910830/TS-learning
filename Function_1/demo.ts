//默认参数的时候TS引擎会会根据默认的值判断参数类型，这里是number
function hi(name:string, age=19){
    console.log(`Hi,${name},${age}`)
}

hi('hanbaoyi', 18)



// string | number 表示返回字符串或者数字
// return undefined 表示的是返回任何类型
function f1(name:string,age:number):string|number {
    if(age >18){
        return '18'
    }else{
        return 29
    }
}


// arguments
function arg(a:number,b:number):number {
    //a = arguments[0]
    //b = arguments[1]
    console.log(arguments);//{0: 1,1: 2,callee: ƒ arg(a, b),length: 2,Symbol(Symbol.iterator): ƒ values()\,__proto__: Object}
    return a + b
}

arg(1,2)


//call调用函数
function printThis(){
    'use strict'
    console.log(this); //this不是【上下文】，而是【参数】
}
printThis.call('fuck',1,2,3) //this是第一个参数
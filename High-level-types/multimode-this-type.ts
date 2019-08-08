class Calc{
  public value: number
  constructor(n:number){
    this.value = n
  }
  add(n:number){
    this.value += n
    return this  //返回当前的实例
  }
  multiple(n:number){
    this.value *= n
    return this //Calc | BiggerCalc 多态，this既可以指向父类，也可以指向子类
  }
}

class BiggerCalc extends Calc{
  sin(){
    this.value= Math.sin(this.value)
    return this //Calc | BiggerCalc 多态，this既可以指向父类，也可以指向子类
  }
}

const b = new Calc(2)
b.add(1).add(2).multiple(2)
console.log(b.value);

const c = new BiggerCalc(1)
c.add(1).multiple(2).sin()
console.log(c);
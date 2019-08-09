export interface Person {
  name: string;
  age:number
}

const a = function(p :Person){
  console.log(p);
}

export default a

//打包的时候运行命令tsc demo.ts -d，生产demo.d.ts文件

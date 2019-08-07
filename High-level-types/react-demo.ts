import React from 'react'

const Layout:React.FunctionComponent & {Header: React.FunctionComponent} = () => {
  return(
    React.createElement('div',null, 'hi')
  )
}

Layout.Header= () => {
  return(
    React.createElement('div',null, 'hi')
  )
}

console.log(Layout);

//第二种方法
interface Layout2 extends React.FunctionComponent{
  Header: React.FunctionComponent
}

const Layout2:Layout2 = () => {
  return(
    React.createElement('div',null, 'hi')
  )
}

Layout2.Header= () => {  //Layout2继承了React.FunctionComponent的Header属性，所以必须添加Header属性
  return(
    React.createElement('div',null, 'hi')
  )
}


console.log(Layout2);

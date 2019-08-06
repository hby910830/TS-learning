import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button'
import Dialog from './Dialog'

//e:React.MouseEvent这里必须声明参数的鼠标事件类型
// let alertDialog = (e:React.MouseEvent) => {
//   console.log(e);
//   alert('alertDialog')
// }

//另外一种写法
let alertDialog:React.MouseEventHandler = e => {
  console.log(e);
  console.log('alertDialog')
}

ReactDOM.render(
  <div>
    <Button size="small">
      <span>点我</span>
      <span>点我</span>
    </Button>
    <Button>点我</Button>
    <Button size="big">点我</Button>
    <Dialog size="big" onClick={alertDialog}>dialog</Dialog>
  </div>,
  document.getElementById('root')
);


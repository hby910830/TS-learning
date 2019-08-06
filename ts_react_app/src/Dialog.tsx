import React from 'react'
import './Button.css'

interface IProps {
  size?: string;
  onClick?: React.MouseEventHandler;  //react的鼠标事件处理器类型
}

{/*<IProps>是react的props参数*/}
const Dialog:React.FunctionComponent<IProps>= function(props){
  return <div className={`button ${props.size}`} onClick={props.onClick}>{props.children}</div>
}

export default Dialog
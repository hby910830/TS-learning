import React from 'react'
import './Button.css'

interface IProps {
  size?: string
}

{/*<IProps>是react的props参数*/}
const Dialog:React.FunctionComponent<IProps>= function(props){
  return <div className={`button ${props.size}`}>{props.children}</div>
}

export default Dialog
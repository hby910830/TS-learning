import React from 'react'
import './Button.css'

interface IProps {
  size?: string
}

// type Props = {size: string}  也可以这么声明类型

export default function Button(props: IProps) {
  return <div className={`button ${props.size}`}>
    {/*这里的children是父元素的【点我】文字*/}
    {props.children}
  </div>
}
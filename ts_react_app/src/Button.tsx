import React from 'react'
import './Button.css'

interface IProps {
  size?: string;
  //JSX.Element是JSX的element类型，对应父元素的span标签
  children?: string | JSX.Element  /*当有子元素的时候，react规定子组件必须有children属性。这里的children是父元素的【点我】文字*/
}

// type Props = {size: string}  也可以这么声明类型

export default function Button(props: IProps) {
  return <div className={`button ${props.size}`}>
    {/*这里的children是父元素的【点我】文字*/}
    {props.children}
  </div>
}
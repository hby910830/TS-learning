import React, {Component} from 'react'

//另外一种写法 type Props
// type Props = {
//   size?: string;
//   xxx?: string;
//   yyy?: string;
//   onClick?: () => void
// }
//有限使用接口
interface IProps {
  size?: string;
  xxx?: string;
  yyy?: string;
  onClick?: () => void
}

interface IState {
  n: number
}

// class Button extends Component<{ size?: string }> { // Component<{size:string}>:泛型参数，接受的props所有属性的类型列表
//另外一种写法
class Button extends Component<IProps,IState> { //指定props类型和state类型
  static displayName = 'HBY-Button'  //displayName用来展示react-developer-tool展示的标签,替换<Button>为<HBYButton>
  constructor(props:IProps){
    super(props)
    this.state = {
      n: 1
    }
  }
  render() {
    return (
      <div className={`button ${this.props.size}`}>
        {this.props.children}
        {this.state.n}
      </div>
    )
  }
}

export default Button
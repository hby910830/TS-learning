import React, {Component} from 'react';
import Button from './components/button';
import './components/Button.css';

class App extends Component {
  onClick(e: React.MouseEvent<HTMLDivElement>) {
    let div = e.currentTarget
    console.log(div.style)
  }

  render() {
    return (
      <div className="App">
        <Button size="small">你好</Button>
        <Button onClick={this.onClick}>你好</Button>
        <Button size="big">你好</Button>
      </div>
    );
  }
}

export default App;

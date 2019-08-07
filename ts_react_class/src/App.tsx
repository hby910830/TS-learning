import React, {Component} from 'react';
import Button from './components/button';
import './components/Button.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button size="small">你好</Button>
        <Button>你好</Button>
        <Button size="big">你好</Button>
      </div>
    );
  }
}

export default App;

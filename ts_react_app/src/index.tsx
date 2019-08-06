import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button'


ReactDOM.render(
  <div>
            <Button size="small"><span>点我</span></Button>
            <Button>点我</Button>
            <Button size="big">点我</Button>
          </div>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button'
import Dialog from './Dialog'


ReactDOM.render(
  <div>
            <Button size="small">
              <span>点我</span>
              <span>点我</span>
            </Button>
            <Button>点我</Button>
            <Button size="big">点我</Button>
            <Dialog size="big">dialog</Dialog>
          </div>,
  document.getElementById('root')
);


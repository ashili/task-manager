import React from 'react';
import ReactDOM from 'react-dom';
import TaskMangerHeader from './TaskMangerHeader';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskMangerHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

it('prop types checks', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

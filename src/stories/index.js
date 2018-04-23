import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../components/Header';
import '../index.css';
import '../components/App.css';

storiesOf('Header', module)
  .add('with title', () => (
    <div className="App">
      <Header title="I set the title" />
    </div>
  ))
  .add('without title', () => (
    <div className="App">
      <Header />
    </div>
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import Dialog from '../components/Dialog';
import Header from '../components/Header';
import '../index.css';
import '../components/App.css';

storiesOf('Header', module)
  .add('with title', () => (
    <div className="app">
      <Header title="I set the title" />
    </div>
  ))
  .add('without title', () => (
    <div className="app">
      <Header />
    </div>
  ));

storiesOf('Dialog', module)
  .add('open', () => (
    <Dialog isOpen>
      Foo
    </Dialog>
  ))
  .add('closed', () => (
    <Dialog>
      Foo
    </Dialog>
  ))

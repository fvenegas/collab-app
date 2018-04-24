import React, { Component } from 'react';
import Dialog from './Dialog';
import Header from './Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false
    };
  }

  onOpenDialog = () => {
    this.setState({ isDialogOpen: true });
  }

  onCloseDialog = () => {
    this.setState({ isDialogOpen: false });
  }

  render() {
    return (
      <div className="app">
        <Header title="manu!!" />
        <p className="app__intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={this.onOpenDialog}>Open dialog</button>

        <Dialog isOpen={this.state.isDialogOpen} onClose={this.onCloseDialog}>
          Hello!
        </Dialog>
      </div>
    );
  }
}

export default App;

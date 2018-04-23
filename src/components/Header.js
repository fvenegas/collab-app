import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import './Header.css';

class Header extends Component {
  static defaultProps = {
    title: 'Welcome to React baby!'
  }

  static propTypes = {
    title: PropTypes.string
  }

  render() {
    return (
      <header className="Header">
        <img src={logo} className="Header-logo" alt="logo" />
        <h1 className="Header-title">
          {this.props.title}
        </h1>
      </header>
    );
  }
}

export default Header;

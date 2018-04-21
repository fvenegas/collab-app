import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import './Header.css';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
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

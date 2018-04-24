import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Dialog.css';

export default class Dialog extends Component {
  static defaultProps = {
    isOpen: false
  }

  static propTypes = {
    children: PropTypes.node,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func.isRequired
  }

  render() {
    const {
      children,
      isOpen,
      onClose
    } = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <div className="dialog">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    );
  }
}

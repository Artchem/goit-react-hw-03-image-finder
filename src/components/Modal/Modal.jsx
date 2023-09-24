import css from './Modal.module.css';

import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillMount');

    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      // console.log(e.code);
      console.log('Close modal');
      // console.log(this.props.onClose);
      this.props.onClose();
    }
  };

  handleBackdropClick = evt => {
    console.log('Click in backdrop');
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.handleBackdropClick}>
        <div className={css.modal}>
          <img src="" alt="" />
          {this.props.children}
        </div>
      </div>,
      modalRoot
    );
  }
}

// export const Modal = () => {
//   return (

//   );
// };

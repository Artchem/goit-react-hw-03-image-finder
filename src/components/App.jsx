import { Modal } from './Modal/Modal';

import React, { Component } from 'react';

export class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    return <div>{this.state.showModal && <Modal />}</div>;
  }
}

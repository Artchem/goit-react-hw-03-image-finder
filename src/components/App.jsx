import { ToastContainer } from 'react-toastify';
import React, { Component } from 'react';
import ContentInfo from './ContentInfo/ContentInfo';

export class App extends Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <div>
        <ContentInfo />

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

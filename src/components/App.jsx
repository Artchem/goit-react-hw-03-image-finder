import { ToastContainer } from 'react-toastify';
import React, { Component } from 'react';
import ContentInfo from './ContentInfo/ContentInfo';

export class App extends Component {
  state = {
    // showModal: false,
    // photoLarge: null,
    // searchText: '',
  };
  componentDidMount() {}

  render() {
    // console.log(this.props.photo);
    return (
      <div>
        <ContentInfo
        // searchText={this.state.searchText}
        // openModal={this.toggleModal}
        ></ContentInfo>

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

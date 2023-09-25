import { Modal } from './Modal/Modal';
import { ToastContainer } from 'react-toastify';

import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import ContentInfo from './ContentInfo/ContentInfo';

export class App extends Component {
  state = {
    showModal: false,
    // photos: [],
    searchText: '',
  };
  componentDidMount() {}

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  handleFormSubmit = searchText => {
    console.log(searchText);
    this.setState({ searchText: searchText });
  };

  render() {
    // console.log(this.state.photos);
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ContentInfo searchText={this.state.searchText}></ContentInfo>

        <ToastContainer autoClose={3000} />
        {/* <ImageGallery>
          <ImageGalleryItem photos={this.state.photos} />
        </ImageGallery> */}
        {/* {this.state.photos && (
          <div>
            Photo
            <li className="gallery-item">
              <img src={this.state} alt="" />
            </li>
          </div>
        )} */}
        <button type="button" onClick={this.toggleModal}>
          open
        </button>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
      </div>
    );
  }
}

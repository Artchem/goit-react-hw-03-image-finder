import { Modal } from './Modal/Modal';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';

import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export class App extends Component {
  state = {
    showModal: false,
    photos: [],
  };
  componentDidMount() {
    axios
      .get(
        `https://pixabay.com/api/?q=cat&page=1&key=38837496-e09cca1b216ed759136fb60be&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(res => {
        console.log(res.data.hits);
        return res.data.hits;
      })
      .then(photos => this.setState({ photos }));
  }

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  handleFormSubmit = name => {
    console.log(name);
  };

  render() {
    // console.log(this.state.photos);
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={3000} />
        <ImageGallery>
          <ImageGalleryItem photos={this.state.photos} />
        </ImageGallery>
        {this.state.photo && (
          <div>
            Photo
            <li className="gallery-item">
              <img src={this.state} alt="" />
            </li>
          </div>
        )}
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

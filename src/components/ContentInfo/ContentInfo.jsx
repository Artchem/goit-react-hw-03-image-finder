import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import { fetchPixabay } from 'services/api-pixabay';
import { toast } from 'react-toastify';
import { Modal } from 'components/Modal/Modal';
import Searchbar from 'components/Searchbar/Searchbar';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';

export default class ContentInfo extends Component {
  state = {
    showModal: false,
    searchText: '',
    page: 1,
    photos: null,
    totalPhotos: 0,
    loading: false,
    largeImageURL: null,
    error: null,
  };

  fetchPhotos = async () => {
    this.setState({ loading: true });
    try {
      const photos = await fetchPixabay(this.state.searchText, this.state.page);

      if (photos.hits.length === 0) {
        toast.info(
          `There are no images found for your request ${this.state.searchText}`
        );
        // console.log('photos :>> ', photos);
        this.setState({
          error:
            'Sorry, there are no images found for your request. Please try again.',
        });
      }

      if (photos.hits.length !== 0 && this.state.page === 1) {
        toast.success(`You found ${photos.total} images `);
      }

      if (
        this.state.totalPhotos > 0 &&
        this.state.totalPhotos <= this.state.photos.length + 12 &&
        this.state.page !== 1
      ) {
        toast.info(` end photos`);
      }

      // console.log('this.state.totalPhotos :>> ', this.state.totalPhotos);
      this.setState(prevState => ({
        photos: [...prevState.photos, ...photos.hits],
        totalPhotos: photos.total,
      }));
    } catch (error) {
      this.setState({ error: error.message });
      console.log('error.message :>> ', error.message);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleFormSubmit = searchText => {
    console.log(searchText);
    this.setState({
      searchText: searchText,
      page: 1,
      photos: [],
      totalPhotos: 0,
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    // console.log('this.props :>> ', this.props);
    if (
      prevState.searchText !== this.state.searchText ||
      prevState.page !== this.state.page
    ) {
      this.fetchPhotos();
    }
  };

  toggleModal = photo => {
    this.setState({ largeImageURL: photo });
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };
  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    // this.fetchPhotos(this.state.searchText, this.state.currentPage);
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.loading && <Loader />}
        {this.state.error && <p>{this.state.error}</p>}
        {this.state.photos && (
          <ImageGallery>
            <ImageGalleryItem
              onClick={this.toggleModal}
              photos={this.state.photos}
            />
          </ImageGallery>
        )}
        {this.state.photos &&
          this.state.totalPhotos !== this.state.photos.length &&
          this.state.photos.length < this.state.totalPhotos && (
            <Button onBtnClick={this.loadMore} />
          )}
        {/* {this.state.loading && <LoaderSpinner />} */}

        {this.state.showModal && (
          <Modal
            photo={this.state.largeImageURL}
            onClose={this.toggleModal}
          ></Modal>
        )}
      </>
    );
  }
}

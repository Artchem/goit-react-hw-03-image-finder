import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import { fetchPixabay } from 'services/api-pixabay';
import { toast } from 'react-toastify';

export default class ContentInfo extends Component {
  state = {
    searchText: '',
    photos: null,
    loading: false,
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log('this.props :>> ', this.props);

    if (prevProps.searchText !== this.props.searchText) {
      this.setState({ loading: true });
      fetchPixabay(this.props.searchText)
        .then(data => this.setState({ photos: data.hits }))
        .catch(error => toast.error(`${error.message}`))
        .finally(() => this.setState({ loading: false }));
    }
  };

  render() {
    return (
      <>
        {this.state.loading && <div>Loading....</div>}
        {this.state.photos && (
          <ImageGallery>
            <ImageGalleryItem photos={this.state.photos} />
          </ImageGallery>
        )}
      </>
    );
  }
}

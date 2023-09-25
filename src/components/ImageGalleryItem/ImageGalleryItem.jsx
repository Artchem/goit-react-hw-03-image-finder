import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ photos }) => {
  console.log(photos);
  //   const { id, webformatURL, tags, largeImageURL } = photos;
  return photos.map(photo => (
    <li key={photo.id} className={css.ImageGalleryItem}>
      <img className={css.image} src={photo.webformatURL} alt={photo.tags} />
    </li>
  ));
};

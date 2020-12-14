import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from './galleryItem';

const Gallery = ({ images, onClick }) => {
  return (
    <ul className="ImageGallery">
      {images.map((image, index) => (
        <GalleryItem
          key={index}
          smallImage={image.webformatURL}
          largeImage={image.largeImageURL}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Gallery;

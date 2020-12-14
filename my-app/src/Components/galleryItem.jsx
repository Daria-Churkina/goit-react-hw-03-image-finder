import React from 'react';
import PropTypes from 'prop-types';

const GalleryItem = ({ smallImage, largeImage, onClick }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        onClick={() => onClick(largeImage)}
        src={smallImage}
        alt="gallaryImg"
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

GalleryItem.propTypes = {
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GalleryItem;

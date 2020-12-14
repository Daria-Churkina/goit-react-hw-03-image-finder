import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  clickOverlay = e => {
    if (e.target.nodeName !== 'IMG') {
      this.props.onClose();
    }
  };

  render() {
    const { largeImage } = this.props;
    return (
      <div onClick={this.clickOverlay} className="Overlay">
        <div className="Modal">
          <img src={largeImage} alt="modalImg" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

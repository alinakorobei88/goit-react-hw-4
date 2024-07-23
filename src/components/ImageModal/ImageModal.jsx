import React from 'react';
import ReactModal from 'react-modal';
import './ImageModal.module.css';

ReactModal.setAppElement('#root');

const ImageModal = ({image, onClose}) => {
    return (
        <ReactModal isOpen={!!image} onRequestClose={onClose} className="ImageModal">
          <div className="ModalContent">
            <img src={image.urls.regular} alt={image.alt_description} />
            <button onClick={onClose}>Close</button>
          </div>
        </ReactModal>
      );
};

export default ImageModal;
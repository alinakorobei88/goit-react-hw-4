import css from './ImageModal.module.css'
import Modal from 'react-modal'

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!image) return null;
  return (
    <div className={css.div}>
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}>
      <p>{image.description || image.alt_description}</p>
      <img
        src={image.urls.regular}
        alt={image.alt_description}
      />
      <button className={css.btn} onClick={onRequestClose}>X</button>
      </Modal>
      </div>
  )
}

export default ImageModal
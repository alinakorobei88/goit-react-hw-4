import css from './ImageCard.module.css'

const ImageCard = ({ image, onClick }) => {
  const { urls, alt_description } = image;
  return (
    <div
      className={css.div}
    onClick={onClick}
    >
      <img
        className={css.img}
        src={urls.small}
        alt={alt_description}
      />
    </div>
  )
}

export default ImageCard
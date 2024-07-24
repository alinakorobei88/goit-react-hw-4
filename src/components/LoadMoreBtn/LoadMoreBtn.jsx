import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onClick }) => (
  <button
    type='button'
    onClick={onClick}
    className={css.btn}>
    Load more...
  </button>
)

export default LoadMoreBtn
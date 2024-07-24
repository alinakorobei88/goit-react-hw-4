import css from './ErrorMessage.module.css'

const ErrorMessage = ({ message }) => (
  <div className={css.div}>
    <p className={css.p}>{message}</p>
  </div>
)

export default ErrorMessage
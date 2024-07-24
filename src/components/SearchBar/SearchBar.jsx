import { useState } from "react";
import toast from 'react-hot-toast'
import css from './SearchBar.module.css'


const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleInputChange = evt => {
    setQuery(evt.target.value)
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a search query');
      return;
    }
    onSubmit(query);
    setQuery('');
  }
  return (
    <div className={css.div}>
      <form
        className={css.form}
      onSubmit={handleSubmit}
      >
    < input
          className={css.input}
          placeholder='Search...'
          type="text"
          value={query}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className={css.btn}>
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar


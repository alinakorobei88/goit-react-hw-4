import React, {useState} from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({onSubmit}) => {
    const [query, setQuery] = useState('');

    const handleChange = evt => {
        setQuery(evt.target.value);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        if (query.trim()) {
            onSubmit(query);
            setQuery('');
        } else {
            alert('Please enter a search query.');
        }
    };

    return (
        <header className='SearchBar'>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={query}
                onChange={handleChange}
                autoComplete='off'
                autoFocus
                placeholder='Search images and photos'/>
                <button type='submit'>Search</button>
            </form>
        </header>
    );
};

export default SearchBar;


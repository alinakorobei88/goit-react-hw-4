import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

const SearchBar = ({onsubmit}) => {
    const [query, setQuery] = useState('');

    const handleChange = evt => {
        setQuery(evt.target.value);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        if (query.trim() === '') {
            return;
        }
        onsubmit(query);
        setQuery('');
    };

    return (
        <header className={styles.SearchBar}>
            <form onSubmit={handleSubmit} className={styles.SearchForm}>
                <input
                type="text"
                value={query}
                onChange={handleChange}
                autoComplete='off'
                autoFocus
                placeholder='Search images and photos'
                className={styles.SearchFormInput}/>
                <button type='submit' className={styles.searchFormButton}>Search</button>
            </form>
        </header>
    );
};


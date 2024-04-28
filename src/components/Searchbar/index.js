import React, { useState, useEffect } from 'react';
import styles from './Searchbar.module.scss';
import Tippy from '@tippyjs/react/headless';
import Dropdown from '../Dropdown';
import { FakeSearchDropAPI } from './FakeSearchDropAPI';

function SearchBarStyles({ isDefault }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  // Debounce function
  const debounce = (func, delay) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Function to fetch data from API and handle search
  const handleSearch = debounce((term) => {
    if (term === '') {
      setSearchResults([]);
      return;
    }
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const results = data.filter((item) => item.title.toLowerCase().includes(term.toLowerCase())).slice(0, 3);
        setSearchResults(results);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, 500);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    handleSearch(event.target.value);
  };

  // Function to handle input focus
  const handleFocus = () => {
    setIsInputFocused(true);
    setIsScrolling(false);
  };

  // Function to handle input blur
  const handleBlur = () => {
    setIsInputFocused(false);
  };

  const handleScroll = () => {
    setIsInputFocused(false);
    setIsScrolling(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isScrolling && isInputFocused) {
      setIsInputFocused(false);
    }
    setIsScrolling(false);
  }, [isScrolling, isInputFocused]);

  let searchBarStyles = [styles.searchBar];

  if (isDefault) {
    searchBarStyles.push(styles.whiteBackgroundColor);
    searchBarStyles.push(styles.bigSize);
  }

  return (
    <div className={styles.searchBarContainer}>
      <input
        onChange={handleChange}
        value={searchTerm}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={searchBarStyles.join(' ')}
      />
      {!isScrolling ? (
        searchTerm === '' &&
        isInputFocused && (
          <div className={styles.overlayFrame}>
            <Dropdown data={FakeSearchDropAPI} frameType="hotSearchFrame" />
          </div>
        )
      ) : (
        <></>
      )}
      {!isScrolling ? (
        searchResults.length > 0 &&
        isInputFocused && (
          <div className={styles.overlayFrame}>
            <Dropdown data={searchResults} frameType="searchFrame" />
          </div>
        )
      ) : (
        <></>
      )}
    </div>
  );
}

export default SearchBarStyles;

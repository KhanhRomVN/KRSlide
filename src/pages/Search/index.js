import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';
import styles from './Search.module.scss';
import React, { useState } from 'react';
import Home from '../Home';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const data = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry', 'Fig', 'Grape', 'Home', 'Search'];

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filteredSuggestions = data.filter((item) => item.toLowerCase().includes(term.toLowerCase()));
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    if (suggestion === 'Home') {
      window.location.href = '/';
    } else if (suggestion === 'Search') {
      window.location.href = '/search';
    } else {
      setSearchTerm(suggestion);
      setSuggestions([]);
    }
  };

  return (
    <div>
      <Tippy
        placement="bottom"
        interactive
        visible={suggestions.length > 0}
        render={(attrs) => (
          <ul tabIndex="-1" {...attrs}>
            {suggestions.map((suggestion) => (
              <li key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      >
        <input type="text" placeholder="Search..." value={searchTerm} onChange={handleInputChange} />
      </Tippy>
    </div>
  );
};

export default Search;

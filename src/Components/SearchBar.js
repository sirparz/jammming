import React, { useState, useEffect } from 'react';
import './SearchBar.css';

function SearchBar(props) {
  const [term, setTerm] = useState('');

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  }

  useEffect(() => {
    setTerm(term);
  }, [term]);

  return (
    <div className='search-container'>
        <input 
          type="search" 
          placeholder='Search Musics Here'
          value={props.term} 
          onChange={props.onSearch}
          required />
        <button type="submit">
          <span>Search</span>
        </button>
    </div>
  );
}

export default SearchBar;
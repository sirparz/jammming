import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className='search-container'>
      <form>
        
        <input type="search" name="search" placeholder='Search Musics Here' required/>
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
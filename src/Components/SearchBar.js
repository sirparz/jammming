import React, { useState, useEffect, useCallback } from 'react';
import './SearchBar.css';

function SearchBar(props) {
  return (
    <div className='Search-container'>
        <input 
          type="search" 
          placeholder='Search Tracks Here'
          value={props.term} 
          onChange={props.onSearch}
          required />
    </div>
  );
}

export default SearchBar;
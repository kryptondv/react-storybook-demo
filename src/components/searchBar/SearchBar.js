import React from 'react';
import { FaSearch } from 'react-icons/fa'

import './Searchbar.css';

const SearchBar = ({variant, ...rest}) => {
  return (
    <div className={`search-bar ${variant}`}>
      <FaSearch className="search-icon"/>
      <input className="search-input" placeholder="Search..." {...rest}/>
    </div>
  );
}

export default SearchBar;

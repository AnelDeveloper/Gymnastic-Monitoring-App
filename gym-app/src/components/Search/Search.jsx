import React from 'react';
import './Search.css';

const SearchComponent = () => {
    return (
        <div className="search-holder">
            <input type="text" className="search-input" placeholder="Search Gymnasts" />
        </div>
    );
}

export default SearchComponent;

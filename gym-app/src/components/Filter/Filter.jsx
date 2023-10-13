import React from 'react';
import './Filter.css';

const FiltersComponent = () => {
    return (
        <div className="filters-container">
            <div className="filter">
                <label>Discipline:</label>
                <div className="filter-value">All</div>
            </div>
            <div className="filter">
                <label>Program:</label>
                <div className="filter-value">All</div>
            </div>
            <div className="filter">
                <label>Category:</label>
                <div className="filter-value">All</div>
            </div>
            <div className="filter">
                <label>Status:</label>
                <div className="filter-value">All</div>
            </div>
        </div>
    )
}

export default FiltersComponent;

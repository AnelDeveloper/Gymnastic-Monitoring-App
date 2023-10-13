import React, { useState, useRef } from 'react';
import './CustomDropDown.css';

const CustomDropdown = ({ options, onChange }) => {
    // Set CRO as the default option
    const defaultOption = options.find(option => option.label === 'CRO') || null;

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultOption);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        if (onChange) onChange(option.value);
    };

    return (
        <div className="custom-dropdown" ref={dropdownRef}>
            <div className="selected-option" onClick={toggleDropdown}>
                {selectedOption ? (
                <>
            <img src={selectedOption.flag} alt={selectedOption.label} />
            {selectedOption.label}
            <i className={`dropdown-arrow ${isOpen ? 'up' : 'down'}`}></i>
        </>
    ) : "Select Country"} 
</div>


            {isOpen && (
                <div className="options-container">
                    {options.map((option, index) => (
                        <div key={index} className="option" onClick={() => handleOptionClick(option)}>
                            <img src={option.flag} alt={option.label} />
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CustomDropdown;

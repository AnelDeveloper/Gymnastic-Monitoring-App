import React, { useState } from 'react';
import './css/MyApplicationHeader.css';
import textData from '../../utilis/data/text.json';
import  Form  from '../Form/Form';

const MyApplicationHeader = () => {
    const [isModalOpen, setModalOpen] = useState(false); 

    const clickNewApplication = () => {
        setModalOpen(!isModalOpen); 
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setModalOpen(false);
    }

    return (
        <div className="header-application">
            <p className="header-text">{textData.MyApplicationContent.headerText}</p>
            <div className="header-buttons">
                <button className="button is-primary" onClick={clickNewApplication}>New Application</button>
                <button className="button is-info">
                    <span className="green-dot"></span>
                    Open
                </button>
            </div>

            {isModalOpen && (
            <Form clickNewApplication={clickNewApplication} handleSubmit={handleSubmit}/>
            )}
        </div>
    )
}

export default MyApplicationHeader;

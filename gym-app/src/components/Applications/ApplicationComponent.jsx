import React, { useState } from 'react';
import { useSelector } from "react-redux";
import Table from '../Table/Table';
import MyApplicationHeader from '../Headers/MyApplicationHeader'; 
import 'bulma/css/bulma.css';
import './ApplicationComponent.css'
import textData from '../../utilis/data/text.json';
import Form from '../Form/Form';
import SearchComponent from '../Search/Search';
import FilterComponent from '../Filter/Filter';

const ApplicationComponent = () => {
    const { users, loading } = useSelector((store) => store.user);
    const [isModalOpen, setModalOpen] = useState(false); 

    const clickNewApplication = () => {
        setModalOpen(!isModalOpen); 
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setModalOpen(false);
    }

    if (loading) {
        return <div className="loading-container">Loading...</div>;
    }

    return (
        <div className='container'>
            <MyApplicationHeader />

            {users?.length > 0 && (
                <div className='search-filter-container'>
                    <div className='search-component'>
                        <SearchComponent/>
                    </div>
                    <div className='filter-component'>
                        <FilterComponent />
                    </div>
                </div>
            )}

            <div className="requests-title">
                {textData.header.text} ({users.length})
            </div>

            <div className="table-container">
                {users?.length > 0 ? (
                    <Table users={users} />
                ) : (
                    <div className="no-data-container">
                        <img width={80} src="/assets/ghost_nodata/lil_ghost.png" alt="Little Ghost" />
                        <p><strong>No applications yet</strong></p>
                        <p>List of your requests will appear here when you add gymnasts.</p>
                        <button onClick={clickNewApplication} className="button add-gym">Add Gymnast</button>
                    </div>
                )}
            </div>

            {isModalOpen && (
                <Form clickNewApplication={clickNewApplication} handleSubmit={handleSubmit}/>
            )}
        </div>
    );
}

export default ApplicationComponent;

import React, { useState, useRef, useEffect } from 'react';
import './Form.css';
import prefixes from './prefixes/prefix.json';
import CustomDropdown from './CustomDropDown';
import { useSelector, useDispatch } from "react-redux";
import { postUser } from '../../redux/user/actions';

import { setNotification, clearNotification } from '../../redux/user/reducer'; 
import Notification from '../Notification/Notification'; 


const Form = ({ clickNewApplication, handleSubmit }) => {

    const dispatch = useDispatch();


    const countryOptions = [
        { value: 'HR', label: 'CRO', flag: '/assets/images/flags/hr_flag.png' },
        { value: 'BH', label: 'BH', flag: '/assets/images/flags/hr_flag.png' },
    ];

    const phoneInputRef = useRef(null);
    const [phoneNumber, setPhoneNumber] = useState(prefixes[0] + ' ');
    const [showPlaceholder, setShowPlaceholder] = useState(true);
    const { postSuccess, users, loading, notificationMessage } = useSelector((store) => store.user);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [country, setCountry] = useState("HR");
    const [programName, setProgram] = useState("");
    const [date, setDate] = useState("");
    const [categoryName, setCategory] = useState("");
    const [club, setClub] = useState("");
    const [teamName, setTeam] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        if (postSuccess) {
          dispatch(setNotification("User added successfully!"));
                const timer = setTimeout(() => {
            dispatch(clearNotification());
          }, 3000);
      
          return () => clearTimeout(timer);
        }
      }, [postSuccess, dispatch]);




    const handleFormSubmit = (e) => {
        e.preventDefault();

        const data = {
            firstName,
            lastName,
            country,
            programName,
            categoryName,
            date,
            teamName,
            club,
            phone
        };
        

        dispatch(postUser(data));

        setFirstName("");
        setLastName("");
        setCountry("HR");
        setProgram("");
        setDate("");
        setCategory("");
        setClub("");
        setTeam("");
        setPhone("");
        setPhoneNumber(prefixes[0] + ' ');
    
        clickNewApplication();
    };

    const handlePhoneChange = (event) => {
        const value = event.target.value;
        const matchingPrefix = prefixes.find(prefix => value.startsWith(prefix)) || prefixes[0];

        if (value.length > matchingPrefix.length + 1) {
            setShowPlaceholder(false);
        } else {
            setShowPlaceholder(true);
        }

        if (value.length >= matchingPrefix.length + 1 && value[matchingPrefix.length] === ' ') {
            setPhoneNumber(value);
        } else {
            setPhoneNumber(matchingPrefix + ' ');
        }

        const actualPhoneNumber = value.slice(matchingPrefix.length).trim();
        setPhone(actualPhoneNumber);
    };

    const handleInputClick = () => {
        const input = phoneInputRef.current;
        const position = phoneNumber.indexOf(' ') + 1;
        input.setSelectionRange(position, position);
    };

    const handleInputBlur = () => {
        if (phoneNumber.trim() === prefixes[0].trim()) {
            setShowPlaceholder(true);
        }
    };

    const handleProgramChange = (event) => {
        const selectedValue = JSON.parse(event.target.value);
        setProgram(selectedValue.program);
        setCategory(selectedValue.category);
    };

    return (
        <>
    {notificationMessage && <Notification message={notificationMessage} />}
        <div className="modal">
            <div className="modal-content">
                <h4 className="name-modal">Apply gymnast</h4>
                <form onSubmit={handleFormSubmit}>
                    <div className="flex-row-first">
                        <div className="flex-column">
                            <label className="form-label">Enter name</label>
                            <input 
                                type="text" 
                                name="firstName" 
                                className="firstName" 
                                onChange={e => setFirstName(e.target.value)} 
                                placeholder="Enter first name" 
                            />
                        </div>
                        <div className="flex-column">
                            <label className="form-label">Enter last name</label>
                            <input 
                                type="text" 
                                name="lastName" 
                                className="lastName" 
                                onChange={e => setLastName(e.target.value)} 
                                placeholder="Enter last name" 
                            />
                        </div>
                        <div className="flex-column">
                            <label className="form-label">Country</label>
                            <CustomDropdown 
                                options={countryOptions} 
                                value={country}  
                                onChange={setCountry} 
                            />
                        </div>
                    </div>
                    <div className="flex-row-second">
                        <div className="flex-column">
                            <label className="form-label">Program and category</label>
                            <select className="wide-dropdown" onChange={handleProgramChange}>
                                {users.map((item, index) => (
                                    <option 
                                        key={index} 
                                        value={JSON.stringify({ program: item.programName, category: item.categoryName })}
                                    >
                                        {item.programName} - {item.categoryName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex-column">
                            <label className="form-label">Date of birth</label>
                            <input 
                                type="input" 
                                name="dob" 
                                className="date-of-birth" 
                                onChange={e => setDate(e.target.value)} 
                                placeholder="Enter date" 
                            />
                        </div>
                    </div>
                    <div className="flex-row-third">
                        <div className="flex-column">
                            <label className="form-label">Club</label>
                            <input 
                                type="text" 
                                name="club" 
                                className='club' 
                                onChange={e => setClub(e.target.value)}  
                                placeholder="Enter club name" 
                            />
                        </div>
                        <div className="flex-column">
                            <label className="form-label">Team</label>
                            <input 
                                type="text" 
                                name="team" 
                                className='team' 
                                onChange={e => setTeam(e.target.value)}  
                                placeholder="Team name" 
                            />
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="flex-column-fullwidth">
                            <label className="form-label">Phone</label>
                            <div className="phone-input-container">
                                {showPlaceholder && <span className="phone-placeholder">Phone number</span>}
                                <input 
                                    ref={phoneInputRef}
                                    type="text" 
                                    name="phone" 
                                    className="phone"
                                    value={phoneNumber} 
                                    onChange={handlePhoneChange} 
                                    onClick={handleInputClick} 
                                    onBlur={handleInputBlur}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="button-area">
                        <div className="rectangle"></div>
                        <div className="lower-btn-container">
                            <button 
                                className="text-button" 
                                type="button" 
                                onClick={clickNewApplication}
                            >
                                Cancel
                            </button>
                            <button type="submit">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>

    );
    
}

export default Form;

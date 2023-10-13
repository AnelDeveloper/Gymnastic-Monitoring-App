import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './Table.css';

const Table = ({ users }) => {
  const [openRows, setOpenRows] = useState({});

  const toggleRow = (id) => {
    setOpenRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  const extractTime = (dateStr) => {
    const date = new Date(dateStr);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${hours}:${minutes}`;
  };

  const handleCancel = (userId) => {
    console.log(`Cancel button clicked for user with ID: ${userId}`);
  };

  return (
    <table className="table is-fullwidth custom-border">
      <thead>
        <tr>
          <th>Name</th>
          <th>Discipline</th>
          <th>Program</th>
          <th>Category</th>
          <th>Team</th>
          <th>Status</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <React.Fragment key={user.id}>
            <tr>
              <td>
                <div className="name-container">
                  {user.firstName}
                  <div className="country-container">
                    <img 
                      className="country-flag" 
                      width={14} 
                      src={user.country === "HR" 
                        ? "/assets/images/flags/hr_flag.png" 
                        : "/assets/images/other_flag.png"} 
                      alt="Country Flag"
                    />
                    {user.club}
                  </div>
                </div>
              </td>
              <td className='column-discipline'>
                {user.discipline}
                {openRows[user.id] && <div className='rectangle-line'></div>}
              </td>
              <td className="column-program">
                <div className={`expandable-container ${openRows[user.id] ? 'expanded' : ''}`}>
                  {user.programName}
                  {openRows[user.id] && 
                    <div className='collap'>
                      <div className="dateOfBirth">
                        <div>
                          <strong>Date Of Birth: </strong>{formatDate(user.dateOfBirth)}
                        </div>
                        <div>
                          <strong>Phone Number:</strong> {user.phone.startsWith('+385') 
                            ? user.phone 
                            : `+385 ${user.phone}`}
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </td>
              <td className="column-category">{user.categoryName}</td>
              <td className='column-team'>{user.teamName}</td>
              <td className='column-status'>
                <span className={`status-box status-${user.status.trim().toLowerCase().replace(' ', '-')}`}>
                  {user.status}
                </span>
              </td>
              <td className='date-column'>
                {formatDate(user.date)}  {extractTime(user.date)}
              </td>
              <td className='column-arrow'>
                {index === users.length - 2 && (
                  <span className="arrow-text" onClick={() => handleCancel(user.id)}>Cancel</span>
                )}
                {index === users.length - 1 && (
                  <span className="arrow-text">Request Removal</span>
                )}
                <span className={`arrow ${openRows[user.id] ? '' : 'up'}`} onClick={() => toggleRow(user.id)}></span>
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

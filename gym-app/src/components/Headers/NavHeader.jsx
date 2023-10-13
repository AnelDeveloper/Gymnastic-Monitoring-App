import React from 'react';
import './css/NavHeader.css'

const NavHeader = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item">
          <img src="/assets/images/logo/logo.png" width="32" height="32" alt="logo" />
        </a>
      </div>
      
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
          <a className="navbar-item competition-date">
  Competition Name <span className="dot">·</span> <span className="date-color">Date</span>
</a>

          </a>
        </div>
        
        <div className="navbar-end">
          <div className="navbar-item ">
            <img src="/assets/images/admin/admin.png" width={32} height={32} alt="User Profile" />
          </div>
          <div className="navbar-item user-name">
          Nikola Kavezić
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavHeader;

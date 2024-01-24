import React from 'react';
import './Header.css';
import { Avatar } from '@mui/material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      <div
        className="hymn-head"
        style={{
          background: '#f3f3f3f3',
          textAlign: 'center',
          padding: '10px',
          margin: '10px',
        }}
      >
        <h3>The Christian Hymns</h3>
      </div>
      <div className="header-wrapper">
        <div className="avatar">
          <Avatar src="/broken-image.jpg" />
          <h4>Admin</h4>
          <div className="settings">
            <ManageAccountsIcon />
            <ToggleOnIcon />
          </div>
        </div>
        <header className="header">
          <nav className="navbar">
            <ul className="navMenu">
              <li>
                <a href="#" className="link">
                  Dashboard
                </a>
              </li>
              <li>
                <Link to="/AddLang">Language</Link>
              </li>
              <li>
                <Link to="/AddBook">Language</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Header;

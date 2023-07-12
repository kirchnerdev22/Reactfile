import React, { useState } from 'react';

function Header({ currentPage, handlePageChange }) {
  const [activeButton, setActiveButton] = useState('');

  return (
    <div className="header-background">
      <header className="header-container">
        <h1
          onClick={() => {
            handlePageChange('Home');
            setActiveButton('home');
          }}
          style={{ cursor: 'pointer' }}
        >
          TK
        </h1>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#home"
              onClick={() => {
                handlePageChange('Home');
                setActiveButton('home');
              }}
              className={currentPage === 'Home' ? 'nav-link active' : `nav-link ${activeButton === 'home' ? 'active-white' : ''}`}
              style={{ color: '#ff0000' }}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => {
                handlePageChange('About');
                setActiveButton('about');
              }}
              className={currentPage === 'About' ? 'nav-link active' : `nav-link ${activeButton === 'about' ? 'active-white' : ''}`}
              style={{ color: 'rgba(64, 185, 157, 0.8)' }}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#projects"
              onClick={() => {
                handlePageChange('Projects');
                setActiveButton('projects');
              }}
              className={currentPage === 'Projects' ? 'nav-link active' : `nav-link ${activeButton === 'projects' ? 'active-white' : ''}`}
              style={{ color: '#d4a72b' }}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => {
                handlePageChange('Contact');
                setActiveButton('contact');
              }}
              className={currentPage === 'Contact' ? 'nav-link active' : `nav-link ${activeButton === 'contact' ? 'active-white' : ''}`}
              style={{ color: 'rgba(178, 164, 212)'  }}
            >
              Contact
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;

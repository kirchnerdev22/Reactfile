import React, { useState } from 'react';

function Header({ currentPage, handlePageChange }) {
  const [activeButton, setActiveButton] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const showDropdown = () => {
    setDropdownVisible(true);
  };

  const hideDropdown = () => {
    setDropdownVisible(false);
  };

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
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => {
                handlePageChange('Portfolio');
                setActiveButton('portfolio');
              }}
              className={currentPage === 'Portfolio' ? 'nav-link active' : `nav-link ${activeButton === 'portfolio' ? 'active-white' : ''}`}
            >
              Portfolio
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
            >
              Contact
            </a>
          </li>
        </ul>
        <h2 className="nav-item dropdown" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
          <a href="#social" className="nav-link">
            @social
          </a>
          {dropdownVisible && (
            <div className="dropdown-content">
              <a href="#facebook">Facebook</a>
              <a href="#twitter">Twitter</a>
              <a href="#instagram">Instagram</a>
            </div>
          )}
        </h2>
      </header>
    </div>
  );
}

export default Header;

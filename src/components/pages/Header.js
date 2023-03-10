import React from 'react';
import NavTabs from '../NavTabs';
import './Contact.css';

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="header-container">
      <h1>Trenton</h1>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}

export default Header;

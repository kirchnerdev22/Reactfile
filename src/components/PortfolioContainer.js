import React, { useState } from 'react';
import Header from './Header';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home'; // Import the Home component
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home'); // Set the initial page to 'Home'

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {currentPage === 'Home' && <Home handlePageChange={handlePageChange} />}
      {currentPage === 'Projects' && <Projects />}
      {currentPage === 'About' && <About />}
      {currentPage === 'Contact' && <Contact />}
      <Footer />
    </div>
  );
}

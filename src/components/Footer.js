import React from 'react';
import './assets/Contact.css';
import githubLogo from './assets/github.png';
import linkedinLogo from './assets/link.jpg';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/kirchnerdev22">
          <img src={githubLogo} alt="GitHub" className='github-img'/>
        </a>
        <a href="https://www.linkedin.com/in/trenton-kirchner-91b38b174/" >
          <img src={linkedinLogo} alt="LinkedIn" className='linkedin'/>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

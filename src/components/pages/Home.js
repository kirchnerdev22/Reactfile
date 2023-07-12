import React from 'react';
import ProfilePhoto from '../assets/image.png';


export default function Home({ handlePageChange }) {
  const navigateToAbout = () => {
    handlePageChange('About');
  };

  return (
    <div className='about'>
      <div className='profile-section'>
        <img src={ProfilePhoto} alt='Profile' className='profile-photo' />
      </div>
      <div className='info-section'>
        <div className='names-container'>
          <span className='name'>Nice to meet you.</span>
        
        </div>

        <p>
          My name is <strong className='bold-name'>Trenton Kirchner</strong>. I am originally from Indiana, but now reside in Nashville. I spend my spare time making coffee, playing games, and converting a bus into a future house with my wife.
        </p>

        <p>
          <strong>It is great to meet you. I hope you love the site!</strong>
        </p>

        <button onClick={navigateToAbout} className='learn-more-btn'>
          Learn More
        </button>
      </div>
    </div>
  );
}
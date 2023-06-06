import React from 'react';

import ProfilePhoto from '../assets/image.JPEG';

export default function About() {
  return (
    <div className='about'>
      <div className='profile-section'>
        <img src={ProfilePhoto} alt='Profile' className='profile-photo' />
      </div>
      <div className='info-section'>
        <div className='names-container'>
          <span className='name'>Trenton</span>
          <span className='name yellow'>Kirchner</span>
        </div>
        <p>
          My name is Trenton Kirchner. I am a front-end developer, and I'm very passionate and dedicated to my work. I'm new to the field, but I come packing passion and drive to be the best developer I can be.
        </p>
        <a href='/learn-more' className='learn-more-btn'>Learn More</a>
      </div>
    </div>
  );
}

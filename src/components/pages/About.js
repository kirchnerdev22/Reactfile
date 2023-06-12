import React from 'react';
import AboutPhoto from '../assets/standing.png';

export default function About() {
  return (
    <div className='about'>
      
      <div className='content-section'>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat turpis et justo fringilla, nec consectetur sem posuere. Fusce sollicitudin, mi vitae euismod iaculis, purus elit pulvinar metus, id rhoncus turpis velit at ligula.
        </p>
        <p>
          Nulla facilisi. Praesent ac enim dictum, tincidunt quam nec, maximus neque. Donec vitae diam metus. Nullam scelerisque enim eros, sit amet finibus massa pellentesque et. Mauris a justo ac leo efficitur volutpat id sit amet sapien.
        </p>
      </div>
      <div className='photo-section'>
        <img src={AboutPhoto} alt='Profile' className='about-photo' />
      </div>
    </div>
  );
}

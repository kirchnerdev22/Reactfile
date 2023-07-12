import React from 'react';
import AboutPhoto from '../assets/standing.png';

export default function About() {

  const favoriteSongs = [
    {
      uri: 'spotify:track:6me7F0aaZjwDo6RJ5MrfBD',
    },
    {
      uri: 'spotify:track:3yn01PcU95PTbiZ3xvop2j',
    },
    {
      uri: 'spotify:track:4x1dWc1GgAfC04GcTlllax',
    },
    {
      uri: 'spotify:track:207eqIrkUGqJq52p2mjvjw',
    },
    {
      uri: 'spotify:track:76nDLhEwwXvuhGn1ObnQyv',
    },
    {
      uri: 'spotify:track:5e9TFTbltYBg2xThimr0rU',
    },

  ];

  return (
    <div className='about'>
      <div className='left-section'>
        <div className='content-section'>
          <h2>About Me</h2>
          <p>
            My name is Trenton Kirchner, a web developer based in Nashville, TN. I have a passion for creating impactful online experiences using JavaScript, React, and the MERN stack. I constantly expand my skill set and stay updated on the latest web development technologies.
          </p>
          <p>
            In addition to my technical expertise, I have a diverse range of interests and hobbies. I enjoy exploring the great outdoors through hiking and paddleboarding. International travel is another passion of mine, as it allows me to experience different cultures and broaden my perspectives. Ask me about my trip to Iceland! On the creative side, I have a keen interest in converting school buses into unique living spaces. It's an exciting endeavor that combines my love for design, craftsmanship, and sustainable living.
          </p>
          <p>
            If you'd like to connect or learn more about my work, please feel free to visit my <a className='linkedin' href="https://www.linkedin.com/in/trenton-kirchner-91b38b174/">LinkedIn profile</a> or reach out to me on the contact page. I look forward to exploring new opportunities and utilizing my expertise to contribute to impactful web development projects.
          </p>
        </div>
        <div className='music-section'>
          <p>Top Tunes for Trent</p>
          <div className='song-grid'>
            {favoriteSongs.map((song, index) => (
              <div key={index} className='song-item'>
                <iframe
                  src={`https://open.spotify.com/embed/track/${song.uri.split(':')[2]}`}
                  width='300'
                  height='100'
                  c
                  allow='encrypted-media'
                  title={song.title}
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='right-section'>
        <div className='photo-section'>
          <img src={AboutPhoto} alt='Profile' className='about-photo' />
        </div>
      </div>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import ProfilePhoto from '../assets/image.png';

const words = ['Developer', 'Learner']; // Array of words to cycle through

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[currentWordIndex]);

  useEffect(() => {
    // Function to update the current word
    const updateCurrentWord = () => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Update the current word index cyclically
      setCurrentWord(words[currentWordIndex]);
    };

    // Update the current word every 2 seconds
    const intervalId = setInterval(updateCurrentWord, 1750);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [currentWordIndex]);

  return (
    <div className='about'>
      <div className='profile-section'>
        <img src={ProfilePhoto} alt='Profile' className='profile-photo' />
      </div>
      <div className='info-section'>
        <div className='names-container'>
          <span className='name'>Trenton</span>
          <span className='name'>Kirchner</span>
        </div>

        <div className='rotate-text'>
          <span className='word'>Creative</span>
          <span className='word'>{currentWord}</span>
        </div>
        <p>
          My name is Trenton Kirchner. I am a front-end developer, and I'm very passionate and dedicated to my work. I'm new to the field, but I come packing passion and drive to be the best developer I can be.
        </p>
        <a href='/learn-more' className='learn-more-btn'>Learn More</a>
      </div>
    </div>
  );
}

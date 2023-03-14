import React from 'react';
import Jate from '../assets/Jate.png';
import Workday from '../assets/Workday.png';
import Notetaker from '../assets/Notetaker.png';
import Game from '../assets/Game.png';
import Password from '../assets/PasswordGen.png';
import Horiseon from '../assets/Horiseon.png';

export default function Resume() {
  const projects = [
    {
      name: 'Jate',
      image: Jate,
      link: 'https://lit-bayou-66279.herokuapp.com/',
      description: <a href='https://github.com/username/jate'>Github</a>,
    },
    {
      name: 'Day to Day Work Planner',
      image: Workday,
      link: 'https://kirchnerdev22.github.io/Day-to-day-work-planner/',
      description: <a href='https://github.com/username/work-day-planner'>Github</a>,
    },
    {
      name: 'Note Storage',
      image: Notetaker,
      link: 'https://immense-waters-34827.herokuapp.com/',
      description: <a href='https://github.com/username/note-storage'>Github</a>,
    },
    {
      name: 'Javascript Time Attack',
      image: Game,
      link: 'https://github.com/kirchnerdev22/Time-Attack',
      description: <a href='https://github.com/username/javascript-time-attack'>Github</a>,
    },
    {
      name: 'Password Generator',
      image: Password,
      link: 'https://kirchnerdev22.github.io/PasswordGEN/',
      description: <a href='https://github.com/username/password-generator'>Github</a>,
    },
    {
      name: 'Horiseon',
      image: Horiseon,
      link: 'https://kirchnerdev22.github.io/horiseo-seo-challenge/#social-media-marketing',
      description: <a href='https://github.com/username/horiseon'>Github</a>,
    },
    
  ];

  return (
    <div className='projectwhole'>
      <p className='projectbio'>
        These are a few of the projects I have worked on. Keep an eye out as these will change or be replaced.
      </p>
      <ul>
        {projects.map((project) => (
          <li key={project.name} className="project">
            <h3>{project.name}</h3>
            <a href={project.link}>
              <img src={project.image} alt={project.name} className="projectimg" />
            </a>
            <p className='githublink'>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );  
}

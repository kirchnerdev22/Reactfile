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
      description: 'Just another text editor that can save your notes and can be downloaded as a pwa.',
    },
    {
      name: 'Day to Day Work Planner',
      image: Workday,
      link: 'https://kirchnerdev22.github.io/Day-to-day-work-planner/',
      description: 'A work day planner built using HTML, CSS, and Javascript.',
    },
    {
      name: 'Note Storage',
      image: Notetaker,
      link: 'https://immense-waters-34827.herokuapp.com/',
      description: 'Beginner note taking app. First project deployed to Heroku.',
    },
    {
      name: 'Javascript Time Attack',
      image: Game,
      link: 'https://github.com/kirchnerdev22/Time-Attack',
      description: 'A quick mini-game to quiz you through the basics of Javascript',
    },
    {
      name: 'Password Generator',
      image: Password,
      link: 'https://kirchnerdev22.github.io/PasswordGEN/',
      description: 'Simple and quick password generator with input to change password criteria.',
    },
    {
      name: 'Horiseon',
      image: Horiseon,
      link: 'https://kirchnerdev22.github.io/horiseo-seo-challenge/#social-media-marketing',
      description: 'A simple website done in the early days of my bootcamp using only CSS and HTML.',
    },
  ];

  return (
    <div>
      <h1>Resume Page</h1>
      <p>
        These are some past Jobs and Projects.
      </p>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.name} className="project">
            <h3>{project.name}</h3>
            <a href={project.link}>
              <img src={project.image} alt={project.name} className="projectimg" />
            </a>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );  
}

import React from 'react';

export default function Resume() {
  const projects = [
    {
      name: 'Project 1',
      image: 'path/to/project1-image.jpg',
      link: 'https://www.project1.com',
      description: 'Description of project 1.',
    },
    {
      name: 'Project 2',
      image: 'path/to/project2-image.jpg',
      link: 'https://www.project2.com',
      description: 'Description of project 2.',
    },
    {
      name: 'Project 3',
      image: 'path/to/project3-image.jpg',
      link: 'https://www.project3.com',
      description: 'Description of project 3.',
    },
    {
      name: 'Project 4',
      image: 'path/to/project4-image.jpg',
      link: 'https://www.project4.com',
      description: 'Description of project 4.',
    },
    {
      name: 'Project 5',
      image: 'path/to/project5-image.jpg',
      link: 'https://www.project5.com',
      description: 'Description of project 5.',
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
          <li key={project.name}>
            <a href={project.link}>
              <img src={project.image} alt={project.name} />
            </a>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      name: 'Reactfile',
      link: 'https://github.com/kirchnerdev22/Reactfile',
      description: ' This! Reactfile is a resume project created by myself, showcasing skills and experience I have learned throughout my schooling using React. It serves as a personal project but can be used as a reference or template for others. The project is licensed under the MIT License, and for any inquiries or feedback, I can be contacted directly.',
    },
    {
      name: 'Furbnb boarding',
      link: 'https://furbnbcare.herokuapp.com/',
      description: 'Furbnb is a React-based web application that connects pet owners with various pet care services, such as grooming, boarding, training, and veterinary services. It utilizes technologies like Node.js, Express, MongoDB, and GraphQL to provide a seamless experience for users to find and book pet care services.',
    },
    {
      name: 'KRN Fitness',
      link: 'https://pacific-sierra-02565.herokuapp.com/',
      description: 'KRN Fitness is a feature-rich fitness application that offers personalized meal plans, targeted exercises, and health metrics to support users in their fitness journey. With a commitment to user success and comprehensive support, KRN empowers individuals of all fitness levels to achieve their goals effectively and effortlessly. Embark on your fitness journey today with KRN and experience the ease of reaching your desired fitness milestones.',
    },
    {
      name: 'JATE',
      link: 'https://github.com/kirchnerdev22/JATE',
      description: 'JATE is a simple (PWA) project that functions as a text editor installed application. It requires the installation of dependencies such as idb, express, webpack, and workbox. The project can be accessed by cloning the repository, installing dependencies, and running it locally or by using the provided Heroku link. Contributions are currently not open, and the project is licensed under the MIT License. For any inquiries or concerns, the projects creator can be contacted directly.',
    },
    {
      name: 'nosql-social',
      link: 'https://github.com/kirchnerdev22/nosql-social',
      description: 'NoSQL-social is the backend and API code for a social media startup built with Express, Mongoose, and MongoDB. It requires Node.js, Express, MongoDB, and Mongoose to be installed. To use the project, clone the repository, install dependencies with npm install, and start the project with npm start. You can then interact with the API using tools like Insomnia, and the available endpoints and commands are described in the provided video on the README. ',
    },
    {
      name: 'Employee tracking tool',
      link: 'https://github.com/kirchnerdev22/Employee-tracking-tool',
      description: 'The Employee-Tracker is a user-friendly command-line application for managing company employees, roles, and departments in a MySQL database, built with a node.js backend and the inquirer library.It streamlines the management process by providing a simple interface and can be easily deployed from any local directory with the necessary files and packages.',
},
  ];

  return (
    <div className="projects-page">
      <p className='projects-title'>Projects I've made or contributed to.</p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="projects-item">
            <h3>
              <a href={project.link}>{project.name}</a>
            </h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

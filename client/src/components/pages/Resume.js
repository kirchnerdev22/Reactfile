import React from 'react';
import resume from '../assets/Profile.pdf';

function Resume() {
  return (
    <section>
      <p>Download my resume <a href={resume} download>here</a>

.</p>
      <div className="proficiencies">
        <h3>Frontend Proficiencies</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>jQuery</li>
          <li>SASS/SCSS</li>
        </ul>
        <h3>Backend Proficiencies</h3>
        <ul>
          <li>Node.js</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>RESTful APIs</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
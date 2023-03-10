import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function About() {
  return (
    <div>
      <Header currentPage="About" handlePageChange={() => {}} />
      <h1>About Me</h1>
      <p>
      Hi, my name is Trenton Kirchner and I'm a 26-year-old emerging full stack developer from northern Indiana, currently living in Nashville. I am new to the field and am excited to continue growing my skills. Before pursuing a career in tech, I worked in sales and customer service, which taught me the importance of attention to detail and problem-solving. I'm committed to the quality of my work and take pride in writing clean, efficient, and maintainable code.
I graduated from Vanderbilts Full Stack bootcamp with a certificate for coding and have been honing my skills ever since. I believe in treating everyone fairly while maintaining a level of reachable expectations. I'm eager to help and always open to new opportunities to learn and grow.
When I'm not coding, I enjoy Paddle boarding, working on my bus, and hiking. Thank you for taking the time to read my bio, and I look forward to connecting with you!
      </p>
      <Footer />
    </div>
  );
}

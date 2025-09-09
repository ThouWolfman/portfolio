import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate junior developer with a strong foundation in web technologies. 
              I love creating interactive and user-friendly applications using modern frameworks 
              and tools.
            </p>
            <p>
              Currently focusing on React, TypeScript, and building responsive web applications. 
              Always eager to learn new technologies and take on challenging projects.
            </p>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>ASP.NET</li>
              <li>Powershell</li>
              <li>HTML5 & CSS3</li>
              <li>Node.js</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

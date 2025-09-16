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
            Hey there! I'm Justin. With a Computer Science degree and Business Analytics minor from Baldwin Wallace University.
            </p>
            <p>
            Currently an Application Configuration Analyst at FirstEnergy, where I architect automation tools that save hours of manual work. From building robust C# frameworks to  PowerShell scripts, I thrive on optimizing workflows and eliminating inefficiencies.
            </p>
            <p>
             I've evolved from an IT intern to a repair tech, and even served as a medic in the U.S. Air Force. These experiences forged my problem-solving mindset and relentless drive for excellence.
            </p>
            <p>
            Right now, I'm deep in the world of React and TypeScript, crafting responsive web applications. Looking at tackling projects that push my boundaries and some personal projects I have been thinking about.
            </p>
          </div>
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
    </section>
  );
};

export default About;

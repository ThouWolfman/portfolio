import React from 'react';
import './Projects.css';
import ProjectTracker from './ProjectTracker';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  progress: number;
  status: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills.",
      technologies: ["React", "TypeScript", "CSS3"],
      progress: 20,
      status: "Planning"
    },
    {
      id: 2,
      title: "Ice Cream locator",
      description: "Passion project to locate up to date menus for different flavors",
      technologies: ["React", "TypeScript", "CSS3"],
      progress: 10,
      status: "Planning"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-progress">
                <ProjectTracker progress={project.progress} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';

// Import your local images
import portfolioImage from '../assets/images/portfolio.png';
import ecommerceImage from '../assets/images/ETS.png';
import todolists from '../assets/images/todolists.jpg';

const projectsData = [
  {
    name: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects.',
    image: portfolioImage,  // Using imported local image
    link: 'https://github.com/jojosandeep/sandeep001_portfolio.git',
    isDisabled: false, // This project is clickable
  },
  {
    name: 'Expense Tracking System',
    description: 'Designed a web-based Expense Tracking System for users to record, categorize, and monitor their expenses efficiently.',
    image: ecommerceImage,
    link: 'https://your-ecommerce-link.com',
    isDisabled: true,  // This project is not clickable
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            {project.isDisabled ? (
              <div className="project-image-container">
                <img src={project.image} alt={`${project.name} screenshot`} className="project-image" />
              </div>
            ) : (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={`${project.name} screenshot`} className="project-image" />
              </a>
            )}
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              {project.isDisabled ? (
                <span className="project-link-disabled">View Project (Coming Soon)</span>
              ) : (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

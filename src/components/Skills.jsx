import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaCode, FaFileAlt } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiGithub, SiBootstrap, SiPhp, SiMysql, SiCanva } from 'react-icons/si';

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'React', icon: <FaReact /> },
    ],
  },
  {
    category: 'Backend',
    skills: [
     
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'VSCode', icon: <FaCode /> },
      { name: 'Notepad++', icon: <FaFileAlt /> },
      { name: 'Canva', icon: <SiCanva /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div className="skills-category" key={index}>
            <h3>{category.category}</h3>
            <ul>
              {category.skills.map((skill, idx) => (
                <li key={idx} className="skill-item">
                  <span className="skill-icon">{skill.icon}</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
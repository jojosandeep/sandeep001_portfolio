import React, { useState } from 'react';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="header-container">
        <h1 className="Logo">Sandeep Prajapati</h1>
        <div className="menu-icon" onClick={toggleSidebar}>
          ☰
        </div>
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a href="#hero" onClick={toggleSidebar}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={toggleSidebar}>About</a>
            </li>
            <li>
              <a href="#skills" onClick={toggleSidebar}>Skills</a>
            </li>
            <li>
              <a href="#projects" onClick={toggleSidebar}>Projects</a>
            </li>
            <li>
              <a href="#contact" onClick={toggleSidebar}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

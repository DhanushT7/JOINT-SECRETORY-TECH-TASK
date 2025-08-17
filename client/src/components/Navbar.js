import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown, FiCalendar, FiUsers, FiInfo, FiMail } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const menuItems = [
    { name: 'Home', path: '/', icon: <FiCalendar /> },
    { name: 'About', path: '/about', icon: <FiInfo /> },
    { name: 'Contact', path: '/contact', icon: <FiMail /> }
  ];

  const dropdownItems = [
    { name: 'Tech Events', path: '/category/tech', icon: <FiUsers /> },
    { name: 'Workshops', path: '/category/workshops', icon: <FiCalendar /> },
    { name: 'Conferences', path: '/category/conferences', icon: <FiInfo /> },
    { name: 'Hackathons', path: '/category/hackathons', icon: <FiUsers /> }
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="custom-logo">
              <div className="logo-icon-container">
                <div className="laptop-icon">
                  <div className="laptop-screen">
                    <span className="code-tag">&lt;/&gt;</span>
                  </div>
                </div>
                <div className="sun-icon">
                  <div className="sun-rays"></div>
                </div>
              </div>
              <span className="logo-text">EVENTS HUB</span>
            </div>
          </motion.div>
        </Link>

        <div className="navbar-menu">
          <ul className="navbar-nav">
            {menuItems.map((item) => (
              <li key={item.name} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
            
            <li className="nav-item dropdown">
              <button
                className={`nav-link dropdown-toggle ${isDropdownOpen ? 'active' : ''}`}
                onClick={toggleDropdown}
              >
                <FiChevronDown />
                Categories
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.ul
                    className="dropdown-menu"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {dropdownItems.map((item) => (
                      <li key={item.name}>
                        <Link to={item.path} className="dropdown-item">
                          {item.icon}
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          </ul>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <ul className="mobile-nav">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`mobile-link ${location.pathname === item.path ? 'active' : ''}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  </li>
                ))}
                {dropdownItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="mobile-link"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;


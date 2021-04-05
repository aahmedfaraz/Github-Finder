import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Navbar = ({icon,title}) =>  
  <nav className="navbar">
    <h1>
      <i className={icon}></i>
      {title}
    </h1>
    <ul>
      <li>
        <Link to="/" style={linkStyle}>Home</Link>
      </li>
      <li>
        <Link to="/about" style={linkStyle}>About</Link>
      </li>
    </ul>
  </nav>

const linkStyle = {
  textDecoration: 'none',
  color: 'white'
}

Navbar.defaultProps = {
  icon: 'fab fa-github',
  title: 'Github Finder'
}

Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Navbar

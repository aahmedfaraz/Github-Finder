import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({user: {login, avatar_url}}) =>
  <div className="user-card">
    <img className="user-img" src={avatar_url} alt="Profile"/>
    <p>{login}</p>
    <Link to={`/user/${login}`} className="user-btn">Profile</Link>
  </div>

// Type Checking
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem
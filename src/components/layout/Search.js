import React, { useContext, Fragment, useState } from 'react'
import GithubContext from './../../context/github/GithubContext';
import AlertContext from './../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const {searchUsers, users, clearUsers} = githubContext;
  const alertContext = useContext(AlertContext);
  const { displayAlert, clearAlert} = alertContext;
  // State
  const [text, setText] = useState('');

  // Functions
  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if(text === '') {
      displayAlert('Please Enter a Username', 'light');
    } else {
      searchUsers(text);
      clearAlert();
      setText('');
    }
  }

  return (
    <Fragment>
      <form onSubmit={onSubmit} className="search-form">
        <input type="text" name="text" placeholder="Search Users" 
          onChange={onChange}
          value={text}
        />
        <input type="submit" value="&#xf002;" className="btn fas fa-search" />
      </form>
      { users.length > 0 && <button onClick={clearUsers} className="clear">Clear</button> }
    </Fragment>
  )
}

export default Search
import React, {useContext} from 'react';
import Spinner from '../layout/Spinner';
import Message from './../layout/Message'
import GithubContext from './../../context/github/GithubContext';
// importing Components
import UserItem from './UserItem'

const Users = () => {
  const githubContext = useContext(GithubContext);
  const {loading , users, msg} = githubContext;
  if(loading){
    return (
      <Spinner />
    )
  } else if (msg) {
    return <Message />
  } else {
    return (
      <div className="users">
        {users.length > 0 && users.map( user => <UserItem key={user.id} user={user} />)}
      </div>
    )
  }
}

export default Users;
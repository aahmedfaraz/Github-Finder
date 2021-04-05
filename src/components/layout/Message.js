import React, {useContext} from 'react'
import GithubContext from './../../context/github/GithubContext'

const Message = () => {
    const {msg} = useContext(GithubContext);
    
    return (
        <p className="msg">
            {msg}
        </p>
    )
}

export default Message;

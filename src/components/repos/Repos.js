import React, {Fragment, useContext} from 'react';
import RepoItem from './RepoItem'
import GithubContext from './../../context/github/GithubContext'

const Repos = () => {
    const githubContext = useContext(GithubContext);
    const {repos} = githubContext;
    
    return (
        <Fragment>
            <h2 style={{marginTop: '10px', color: 'rgb(58, 58, 58)', textAlign: 'center'}}>Repos</h2>
            <div className="all-repos">
                {repos.map((repo, index) => < RepoItem repo={repo} index={index} key={repo.id} />)}
            </div>
        </Fragment>
    )
}

export default Repos;
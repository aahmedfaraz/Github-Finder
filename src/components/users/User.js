import React, { Fragment, useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos'
import GithubContext from './../../context/github/GithubContext';

const User = ({match}) => {
    const githubContext = useContext(GithubContext);
    const {getUser, user, loading, getUserRepos, repos} = githubContext;
    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, []);
    
    const {name, company, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable} = user;

    if(loading) return <Spinner />

    return (
        <div className="user-data">
            <Link to="/"><button className="back-btn">Back to Search Results</button></Link>
            <span>Hireable: {hireable ? <i className="fas fa-check-circle" style={{color: 'limegreen'}}></i> : <i className="fas fa-times-circle" style={{color: 'tomato'}}></i> }</span>
            <div className="user-card grid-2">
                <div className="all-centered">
                    <img src={avatar_url} alt="Profile" className="round-img"/>
                    <h3 style={{padding: '10px 0'}}>{name}</h3>
                    { location && <p>Location: {location}</p> }
                </div>
                <div className="all-spaced">
                    {
                        bio && (
                            <Fragment>
                                <h2>Bio</h2>
                                <p>{bio}</p>
                            </Fragment>
                        )
                    }
                    <a href={html_url} target="_blank" rel="noreferrer"><button className="user-btn" style={{margin: '10px 0'}}>Github Profile</button></a>
                    { login && <p>Username: {login}</p> }
                    { company && <p>Company: {company}</p> }
                    { blog && <p>Website: {blog}</p> }
                </div>
            </div>
            <div className="user-card badge-card">
                <div className="badge badge-danger">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-light">Public Repos: {public_repos}</div>
                <div className="badge badge-dark">Public Gists: {public_gists}</div>
            </div>
            <Repos repos={repos} />
        </div>
    );
}

export default User;

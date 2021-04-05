import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';
import {SEARCH_USERS, CLEAR_USERS, GET_USER, GET_REPOS, SET_MSG, CLEAR_MSG, SET_LOADING } from '../types';

let githubClientID;
let githubClientSECRET;

if(process.env.NODE_ENV !== 'production') {
    githubClientID = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSECRET = process.env.REACT_APP_GITHIUB_CLIENT_SECRET;
} else {
    githubClientID = process.env.GITHUB_CLIENT_ID;
    githubClientSECRET = process.env.GITHIUB_CLIENT_SECRET;
}

const GithubState = props => {

    const initialState = {
        msg: null,
        users: [],
        user: {},
        repos: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Search Users
    const searchUsers = async text => {
        clearMessage();
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientID}&client_secret=${githubClientSECRET}`);
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
        if(res.data.items.length === 0){
            setMessage('The Username does not exist');
        }
    }
    // Clear Users
    const clearUsers = () => {
        clearMessage();
        dispatch({
            type: CLEAR_USERS,
        })
    };
    // Get User
    const getUser = async username => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientID}&client_secret=${githubClientSECRET}`);
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    }
    // Get Repos
    const getUserRepos = async username => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=10&sort=created_at:asc&client_id=${githubClientID}&client_secret=${githubClientSECRET}`);
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    }
    // Display Message 
    const setMessage = (text) => {
        dispatch({
            type: SET_MSG,
            payload: text,
        })
        setTimeout(() => {clearMessage()},5000);
    }
    // Clear Message
    const clearMessage = () => dispatch({type: CLEAR_MSG});
    // Set Loading
    const setLoading = () => dispatch({type: SET_LOADING});

    return <GithubContext.Provider
                value={{
                    users: state.users,
                    user: state.user,
                    repos: state.repos,
                    msg: state.msg,
                    loading: state.loading,
                    searchUsers,
                    clearUsers,
                    getUser,
                    getUserRepos,
                    setMessage,
                    clearMessage,
                    }}>
                {props.children}
    </GithubContext.Provider>
}

export default GithubState;
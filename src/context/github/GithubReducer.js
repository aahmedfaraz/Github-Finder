import {SEARCH_USERS, CLEAR_USERS, GET_USER, GET_REPOS, SET_MSG, CLEAR_MSG, SET_LOADING } from '../types';

const GithubReducer = (state, action) => {
    switch(action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false,
            };
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case SET_MSG:
            return {
                ...state,
                msg: action.payload,
            }
        case CLEAR_MSG:
            return {
                ...state,
                msg: null,
            }
        default:
            return state;
    }
}

export default GithubReducer;
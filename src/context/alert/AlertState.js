import React, {useReducer} from 'react'
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {SET_ALERT, CLEAR_ALERT} from '../types';

const AlertState = props => {
    const initialState = null;
    const [state, dispatch] = useReducer(AlertReducer, initialState);
    
    // Show Alert
    const displayAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload: {msg, type}
        })
        setTimeout(() => clearAlert() ,5000);
    }
    // Clear Alert
    const clearAlert = () => dispatch({type: CLEAR_ALERT});
    
    return <AlertContext.Provider value={{
                                        alert: state,
                                        displayAlert,
                                        clearAlert
                                        }}>
                                        {props.children}
            </AlertContext.Provider>
}

export default AlertState;
import React, {useContext} from 'react'
import AlertContext from './../../context/alert/alertContext';

const Alert = () => {
    const alertContext = useContext(AlertContext);
    const { alert, clearAlert} = alertContext;
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <div>
                    <i className="fas fa-info-circle"></i> {alert.msg}
                </div>
                <i onClick={clearAlert} className="close-alert fas fa-times"></i>
            </div>
        )
    )
}

export default Alert;
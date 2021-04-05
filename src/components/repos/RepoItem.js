import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({index ,repo:{name, description, html_url}}) => {
    return (
        <div className="user-card repo-card">
            <small className="index">{index+1}</small>
            <a href={html_url} target="_blank" rel="noreferrer"><h4>{name}</h4></a>
            {
                description && <small>{description}</small>
            }
        </div>
    )
}

RepoItem.prototype = {
    repo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
}

export default RepoItem;
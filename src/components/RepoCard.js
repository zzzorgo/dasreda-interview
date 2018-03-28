import React from 'react';
import './RepoCard.css';

export const RepoCard = (props) => {
    const { repo } = props;
    return (
        <div className={"RepoCard"}>
            <div>
                <div className={"RepoCard-name"}>{repo.fullName}</div>
                <div className={"RepoCard-description"}>{repo.description}</div>
            </div>
            <div className={"RepoCard-stars"}>{`${repo.startgazersCount}\u2B50`}</div>
        </div>
    );
};
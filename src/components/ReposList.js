import React from 'react';
import { RepoCard } from './RepoCard';
import './ReposList.css';

export const ReposList = (props) => {
    const { reposList } = props;
    return (
        <div className="ReposList">
            {reposList.map(repo => <RepoCard key={repo.id} repo={repo} />)}
        </div>
    );
};

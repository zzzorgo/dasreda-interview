import React, { Component } from 'react';
import './App.css';
import { getNextPageUrl, getPrevPageUrl, getInitialUrl } from '../utils';
import { Pagination } from './Pagination';
import { ReposList } from './ReposList';

class App extends Component {
    state = {
        reposList: []
    };

    componentWillMount() {
        const url = getInitialUrl();
        this.fetchPage(url);
    }

    async fetchPage(url) {
        const response = await fetch(url);
        const body = await response.json();

        let reposList = [];
        if (body.items && Array.isArray(body.items)) {
            reposList = body.items.map(rawRepo => ({
                id: rawRepo.id,
                fullName: rawRepo.full_name,
                description: rawRepo.description,
                startgazersCount: rawRepo.stargazers_count
            }));
        }

        const linkHeader = response.headers.get("Link");

        this.setState({
            nextPageUrl: getNextPageUrl(linkHeader),
            prevPageUrl: getPrevPageUrl(linkHeader),
            reposList
        });
    }

    prevButtonClick = () => {
        this.fetchPage(this.state.prevPageUrl);
    };

    nextButtonClick = () => {
        this.fetchPage(this.state.nextPageUrl);
    };

    render() {
        return (
            <div className="App">
                <ReposList className="App-ReposList" reposList={this.state.reposList} />
                <Pagination
                    prevButtonClick={this.prevButtonClick}
                    nextButtonClick={this.nextButtonClick} />
            </div>
        );
    }
}

export default App;

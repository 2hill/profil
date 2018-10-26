import React from 'react';
import GithubRepoComp from '../generique/GithubRepoComp';
import './RepoComp';

class RepoComp extends React.Component {
    constructor() {
        super();
        this.state = {
            repos: [],
        };
    }

    componentDidMount() {
        this.mounted = true;

        fetch(`https://api.github.com/users/${this.props.username}/repos`)
            .then(response => {
                if (response.ok) {
                return response.json();
                } else {
                throw new Error('This username does not exist ...');
                }
            })
            .then(repos => { this.mounted && this.setState({ repos }) });
    }

    componentWillUnmount(){
        this.mounted = false;
    }

    render() {
        if (!this.state.repos) {
            return <div>LOADING Repos...</div>
            }

        return (
            <div className="repocomp">
                <h3>{ this.props.username } Repositories :</h3>
                <div>
                    { this.state.repos.map((repos, i) => 
                        <GithubRepoComp repo={ repos } key={ i } />
                    )}
                </div>
            </div>
        );
    }
};

export default RepoComp;

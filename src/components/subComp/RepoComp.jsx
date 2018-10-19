import React from 'react';
import GithubRepoComp from '../generique/GithubRepoComp';

class RepoComp extends React.Component {
    constructor() {
        super();
        this.state = {
            repos: [],
        };
        
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${ this.props.match.params.username }/repos`)
            .then(response => response.json())
            .then(repos => { this.setState({ repos: repos }) });
    }
    

    render() {
        if (!this.state.repos) {
            return <div>LOADING Repos...</div>
            }

        return (
            <div className="repocomp">
                <h3>{ this.props.match } Repositories :</h3>
                <div className="repolist">
                    { this.state.repos.map((repos, i) => 
                        <GithubRepoComp repo={ repos } key={ i }  />
                    )}
                </div>
            </div>
        );
    }
};

export default RepoComp;

import React from 'react';
import GithubUserComp from './GithubUserComp';


class FollowingComp extends React.Component {
    constructor() {
        super();
        this.state = {
            following: [],
        };        
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}/following`)
            .then(response => response.json())
            .then(following => { this.setState({ following }) });
    }
    
    render() {
        if (!this.state.following) {
            return <div>LOADING FOLLOWING...</div>
            }

        return (
            <div className="followers-page">
                <h3>{this.props.match.params.username} is Following :</h3>
                <div className="grid">
                    {this.state.following.map(following => 
                        <GithubUserComp user={following} key={following.id} />
                    )}
                </div>
            </div>
        );
    }
};

export default FollowingComp;

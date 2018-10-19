import React from 'react';
import GithubUserComp from '../generique/GithubUserComp';


class FollowersComp extends React.Component {
    constructor() {
        super();
        this.state = {
            followers: [],
        };
        
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}/followers`)
            .then(response => response.json())
            .then(followers => { this.setState({ followers: followers }) });
    }
    

    render() {
        if (!this.state.followers) {
            return <div>LOADING FOLLOWERS...</div>
            }

        return (
            <div className="followers-page">
                <h3> { this.props.match.params.username } Followers :</h3>
                <div className="grid">
                    { this.state.followers.map(follower => 
                        <GithubUserComp user={ follower } key={ follower.id } />
                    )}
                </div>
            </div>
        );
    }
};

export default FollowersComp;

import React from 'react';
import GithubUserComp from '../generique/GithubUserComp';
import './FollowComp.css';


class FollowersComp extends React.Component {
    constructor() {
        super();
        this.state = {
            followers: [],
        };        
    }

    componentDidMount() {
        
        fetch(`https://api.github.com/users/${this.props.username}/followers`)
            .then(response => response.json())
            .then(followers => { this.setState({ followers }) });
            console.log(this.props.username);
    }
    

    render() {
        if (!this.state.followers) {
            return <div>LOADING FOLLOWERS...</div>
            }

        return (
            <div>
                {console.log(this.props.username)}
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

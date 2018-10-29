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
        this.mounted = true;
        
        fetch(`https://api.github.com/users/${this.props.username}/followers`)
            .then(response => {
                if (response.ok) {
                return response.json();
                } else {
                throw new Error('This username does not exist ...');
                }
            })
            .then(followers => { this.mounted && this.setState({ followers }) });
    }
    
    componentWillUnmount(){
        this.mounted = false;
    }


    render() {
        if (!this.state.followers) {
            return <div>LOADING FOLLOWERS...</div>
            }

        return (
            <div>
                <h3> { this.props.username } Followers :</h3>
               { /* {console.log(this.props.username)} */}
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

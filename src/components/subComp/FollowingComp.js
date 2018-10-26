import React from 'react';
import GithubUserComp from '../generique/GithubUserComp';



class FollowingComp extends React.Component {
    constructor() {
        super();
        this.state = {
            following: [],
        };        
    }

    componentDidMount() {

        this.mounted = true;

        fetch(`https://api.github.com/users/${this.props.username}/following`)
        .then(response => {
            if (response.ok) {
            return response.json();
            } else {
            throw new Error('This username does not exist ...');
            }
        })
        .then(following => { this.mounted && this.setState({ following }) });
}
    
    componentWillUnmount() {
        this.mounted = false;
    }
    
    render() {
        if (!this.state.following) {
            return <div>LOADING FOLLOWING...</div>
            }

            return (
            <div>
                <h3>{this.props.username} is Following :</h3>
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

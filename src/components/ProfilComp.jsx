import React from 'react';
import { Route, Link } from 'react-router-dom';
import RepoComp from './subComp/RepoComp';
import FollowersComp from './subComp/FollowersComp';
import FollowingComp from './subComp/FollowingComp';

class ProfilComp extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}`)
            .then(response => response.json())
            .then(user => { this.setState({ user }) });
    }
    // re render component with new user on click
    componentDidUpdate(prevProps) {
        if (prevProps.params.username !== this.props.params.username) {
            this.componentDidMount();
        }
    }

    renderStat(stat) {
        return (
            <div key={stat.name}>
                <li className="user-info__stat">
                    <Link to={stat.url}>
                        <p className="user-info__stat-value">{stat.value}</p>
                        <p className="user-info__stat-name">{stat.name}</p>
                    </Link>
                </li>
                <Route path={stat.url} component={(props) => <stat.component {...props.match}/>}/>
            </div>            
        );
    }
    
    render() {

        if (!this.state.user) {
            return (<div className="user-page">LOADING...</div>);
        }
        const user = this.state.user;
        const stats = [
            {
                name: 'Repositories',
                value: user.public_repos,
                url: `/user/${this.props.params.username}/repos`,
                component: RepoComp
            },
            {
                name: 'Followers',
                value: user.followers,
                url: `/user/${this.props.params.username}/followers`,
                component: FollowersComp
            },
            {
                name: 'Following',
                value: user.following,
                url: `/user/${this.props.params.username}/following`,
                component: FollowingComp
                
            }
        ];


        return (
            <div className="user-page">
                <div className="user-info">
                    <div className="user-info__text" to={`/user/${user.login}`}>
                        <img className="user-info__avatar" src={user.avatar_url} alt={`${user.login} avatar`} />
                        <h2 className="user-info__title">{user.login} ({user.name})</h2>
                        <p className="user-info__bio">{user.bio}</p> <br />
                        <RepoComp {...this.props.match} />
                    </div>
                    <ul className="user-info__stats">
                        {stats.map(this.renderStat)}
                    </ul>
                </div>
                {this.props.children}
            </div>
        );
    }
};

export default ProfilComp;

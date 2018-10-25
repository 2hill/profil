import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import RepoComp from './subComp/RepoComp';
import FollowersComp from './subComp/FollowersComp';
import FollowingComp from './subComp/FollowingComp';
import './ProfilComp.css';


class ProfilComp extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {}
        };
        this.getApiData = this.getApiData.bind(this);
    }


    getApiData () {
        fetch(`https://api.github.com/users/${this.props.username}`)
            .then(response => response.json())
            .then(user => { this.setState({ user }) });
    }

    componentDidMount() {
        this.getApiData();
    }
    
    // re render component with new user on click
    componentDidUpdate(prevProps) {
        if (prevProps.username !== this.props.username) {
            this.getApiData();
        }
    }

    renderStat(stat) {
        return (
                <Fragment>
                    <Link to={stat.url}>
                        <p className="user-info__stat-value">{stat.value}</p>
                        <p className="user-info__stat-name">{stat.name}</p>
                    </Link>
                    <Route path={stat.url} component={() => <stat.component username={this.props.username}/>}/>  
                </Fragment>     
        );
    }
    
    render() {

        if (!this.state.user) {
            return (<div> LOADING...</div>);
        }
        const user = this.state.user;
        const stats = [
            {
                name: 'Repositories',
                value: user.public_repos,
                url: `/user/${this.props.username}/repos`,
                component: RepoComp
            },
            {
                name: 'Followers',
                value: user.followers,
                url: `/user/${this.props.username}/followers`,
                component: FollowersComp
            },
            {
                name: 'Following',
                value: user.following,
                url: `/user/${this.props.username}/following`,
                component: FollowingComp
                
            }
        ];

        return (
            
                <div className="user-info">
                    <div className="user-info__text" to={`/user/${user.login}`}>
                        <img className="user-info__avatar" src={user.avatar_url} alt={`${user.login} avatar`} />
                        <h2 className="user-info__title">{user.login} ({user.name})</h2>
                        <p className="user-info__bio">{user.bio}</p> <br />
                    </div>
                    <ul className="user-info__stats">
                        {
                        stats.map((stat) => ( 
                            <li key={ stat.name } className="user-info__stat">
                                { this.renderStat(stat) }
                            </li>
                        ))
                        }
                    </ul>
                {this.props.children}
            </div>
        );
    }
};

ProfilComp.propTypes = {
    username: PropTypes.string
};   

export default ProfilComp;

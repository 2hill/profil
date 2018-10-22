import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class ProfilComp extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.match.params.username}`)
        .then(response => response.json())
        .then(user => {this.setState({ user: user})});
    }
// re render component with new user on click
    componentDidUpdate(prevProps) {
        if(prevProps.match.params.username !== this.props.match.params.username){
            this.componentDidMount();
        }
    }

    renderStat(stats) {
        return (
            <li key={ stats.name } className="user-info__stat">
                <Link to={stats.url}>
                    <p className="user-info__stat-value">{ stats.value }</p>
                    <p className="user-info__stat-name">{ stats.name }</p>
                </Link>
            </li>
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
                url: `/user/${ this.props.match.params.username }/repos`
            },
            {
                name: 'Followers',
                value: user.followers,
                url: `/user/${ this.props.match.params.username }/followers`
            },
            {
                name: 'Following',
                value: user.following,
                url: `/user/${ this.props.match.params.username }/following`
            }
        ];

        return (
            <div className="user-page">
                <div className="user-info">
                    <div className="user-info__text" to={`/user/${ user.login }`}>
                        <img className="user-info__avatar" src={ user.avatar_url } alt={`${ user.login } avatar`}/>
                        <h2 className="user-info__title">{ user.login } ({ user.name })</h2>
                        <p className="user-info__bio">{ user.bio }</p>
                        {/*<RepoComp {...this.props.match}/>*/}
                    </div>
        

                    <ul className="user-info__stats">
                        { stats.map(this.renderStat) }
                    </ul>
                </div>
                { this.props.children }
            </div>
        );
    }
};

export default withRouter(ProfilComp);

import React from 'react';
import { Link } from 'react-router-dom';

const GithubUserComp = (props) => {
        return (
                <Link className="userinfo" to={`/user/${props.user.login}`}>
                        <img src={props.user.avatar_url} alt={props.user.login} />
                        <p>{props.user.login}</p>
                </Link>
        );
};
export default GithubUserComp;

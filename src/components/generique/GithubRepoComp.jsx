import React from 'react';


function GithubRepoComp (props) {
        return (
            <a href={`${props.repo.html_url}`} target="_blank">
                {console.log(props)}
                <p>{props.repo.full_name}  {props.repo.stargazers_count} ★</p>
            </a>
        );
};
export default GithubRepoComp;

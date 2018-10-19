import React from 'react';
import { Link } from 'react-router-dom';
import SearchComp from './SearchComp';

function MainComp (props) {
        return (
            <div className="main-app">
                <header className="main-header">
                    <h1 className="title"><Link to="/">Github User API</Link></h1>
                </header>
                <main className="main-content">
                    { props.children }
                </main>
                <SearchComp/>
            </div>
        );
};
export default MainComp;

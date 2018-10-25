import React from 'react';
import { Link } from 'react-router-dom';
import SearchComp from './SearchComp';


const MainComp = () => {
        return (
            <div>
                <header className="main-header">
                    <h1 className="title"><Link to="/">Github User API</Link></h1>
                </header>
                <SearchComp/>
            </div>
        );
};
export default MainComp;

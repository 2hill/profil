import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainComp from './components/MainComp';
import ProfilComp from './components/ProfilComp';
import FollowersComp from './components/subComp/FollowersComp';
import FollowingComp from './components/subComp/FollowingComp';
import RepoComp from './components/subComp/RepoComp';

const route = (
<BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainComp}/>
                <Route path="/followers" component={FollowersComp}/>
                <Route path="/following" component={FollowingComp}/>
                <Route path="/repos" component={RepoComp}/>
                <Route path="/user/:username" component={ProfilComp} />
        </Switch>
</BrowserRouter>
    );
    
ReactDOM.render(route, document.getElementById('root'));

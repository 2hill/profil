import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainComp from './components/MainComp';
import ProfilComp from './components/ProfilComp';
import FollowersComp from './components/subComp/FollowersComp';
import FollowingComp from './components/subComp/FollowingComp';
import RepoComp from './components/subComp/RepoComp';
import Error from './components/generique/Error';

const route = (
<BrowserRouter>
        <Switch>
            <Route exact path="/" component={ MainComp }/>
            <Route exact path="/user/:username" component={ProfilComp}>
                <Route path="/followers" component={FollowersComp} />
                <Route path="/following" component={FollowingComp}/>
                <Route path="/repos" component={RepoComp}/>}/>
            </Route>
            <Route component={ Error }/>
        </Switch>
</BrowserRouter>
    );
    
ReactDOM.render(route, document.getElementById('root'));

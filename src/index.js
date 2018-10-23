import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainComp from './components/MainComp';
import ProfilComp from './components/ProfilComp';
import Error from './components/generique/Error';

const route = (
<BrowserRouter>
        <Switch>
            <Route exact path="/" component={ MainComp }/>
            <Route exct path="/user/:username" component={ ProfilComp } />
            <Route component={ Error }/>
        </Switch>
</BrowserRouter>
    );
    
ReactDOM.render(route, document.getElementById('root'));

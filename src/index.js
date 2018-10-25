import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainComp from './components/MainComp';
import ProfilComp from './components/ProfilComp';

const route = (
<BrowserRouter>
        <Switch>
            <Route exact path="/" component={ MainComp }/>
            <Route path="/user/:username" render={ (props) => <ProfilComp username={props.match.params.username}/>}/> 
            <Route component={ () => <h1> Page Not Found </h1>  }/>
        </Switch>
</BrowserRouter>
    );
    
ReactDOM.render(route, document.getElementById('root'));

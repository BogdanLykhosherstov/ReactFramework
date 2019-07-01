import React from 'react';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
//react router imports
import {Route,Switch} from 'react-router-dom';


export default function App(){
  return(
    <Switch>
      <Route exact path="/" component={Welcome}/>
      <Route path="/dashboard" component={Dashboard}/>
    </Switch>
  )
}

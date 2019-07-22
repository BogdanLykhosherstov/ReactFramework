import React from 'react';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
//react router imports
import {Route,Switch,HashRouter} from 'react-router-dom';


export default function App(){
  return(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Welcome}/>
      <Route path="/dashboard" component={Dashboard}/>
    </Switch>
  </HashRouter>
  )
}

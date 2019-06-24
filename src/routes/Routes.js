import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Account from '../containers/Account';
import Settings from '../components/Settings';
import Login from '../Login';
import Signup from '../components/Signup'
import Splash from '../components/Splash'
const Routes = props => {

  return (
    <Router>
      <Switch>
        <Route exact path="/account" component={ Account }/>
        <Route exact path="/settings" component={ Settings }/>
        <Route exact path="/login" component={ Login }/>
        <Route exact path="/signup" component={ Signup }/>
        <Route exact path="/" component={ Splash }/>
      </Switch>
    </Router>
  )

}


export default Routes

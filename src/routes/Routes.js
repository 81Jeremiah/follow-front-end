import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Account from '../containers/Account';
import Settings from '../components/Settings';
import Login from '../Login';
import Signup from '../components/Signup'

const Routes = props => {

  return (
    <Router>
      <Switch>
        <Route exact path="/account" component={ Account }/>
        <Route exact path="/settings" component={ Settings }/>
        <Route exact path="/login" component={ Login }/>
        <Route exact path="/signup" component={ Signup }/>
      </Switch>
    </Router>
  )

}


export default Routes

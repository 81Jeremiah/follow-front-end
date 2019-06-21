import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Account from '../containers/Account';
import Settings from '../Components/Settings';
import Login from '../Login';

const Routes = props => {

  return (
    <Router>
      <Switch>
        <Route exact path="/account" component={ Account }/>
        <Route exact path="/settings" component={ Settings }/>
        <Route exact path="/login" component={ Login}/>
      </Switch>
    </Router>
  )

}


export default Routes

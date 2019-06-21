import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Account from '../container/Routes'

const Routes = props => {

  return (
    <Router>
      <Switch>
        <Route exact path="/account" component={ Account}/>
      </Switch>
    </Router>
  )

}


export default Routes

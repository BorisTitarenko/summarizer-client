import React from 'react';
import Login from './Authorization/Login';
import UserPanel from './Authorization/UserPanel'
import {BrowserRouter as Router, Switch, Route, Redirect, useHistory, useLocation} from "react-router-dom";
import AuthContext from './Authorization/AuthContext'
import Summarizer from './Summarize/Summarizer'
import PrivateRoute from './Authorization/PrivateRoute'

function App() {

  return (
    <AuthContext>
      <div className="App">
        <UserPanel/>
        <Router>
          <Switch>
            <PrivateRoute path='/summarize'>
              <Summarizer/>
            </PrivateRoute>
            <Route path='/login'>
              <Login/>
            </Route>
            <PrivateRoute exact path='/'>
              <Redirect to='/summarize'/>
            </PrivateRoute>
          </Switch>
        </Router>
      </div>
    </AuthContext>
  );
}

export default App;
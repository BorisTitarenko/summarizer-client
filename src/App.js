import React from 'react';
import Login from './Authorization/Login';
import UserPanel from './Authorization/UserPanel'
import {BrowserRouter as Router, Switch, Route, Redirect, useHistory, useLocation} from "react-router-dom";
import AuthContext from './Authorization/AuthContext'
import Summarizer from './Summarize/Summarizer'


function App() {

  return (
    <AuthContext>
      <div className="App">
        <UserPanel/>
        <Router>
          <Switch>
            <Route path='/summarize'>
              <Summarizer/>
            </Route>
            <Route path='/login'>
              <Login/>
            </Route>
          </Switch>
        </Router>
      </div>
    </AuthContext>
  );
}

export default App;
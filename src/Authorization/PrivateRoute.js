import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useAuth} from './AuthContext';

function PrivateRoute({children, ...rest}){
    let auth = useAuth();
    return (
        <Route
          {...rest}
          render={({ location }) =>
            auth.user ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
    );
}

export default PrivateRoute;
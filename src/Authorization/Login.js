import React from 'react';
import { GoogleLogin } from 'react-google-login';
import {useAuth} from './AuthContext'
import {useHistory, useLocation} from 'react-router-dom'

const clientId = '803410015728-a0oqvinfell4a4is9parp8qeu7ka2bur.apps.googleusercontent.com';

function Login() {
  const auth = useAuth();
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/summarize" } };


  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    auth.login(res.profileObj);
    history.replace(from)
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
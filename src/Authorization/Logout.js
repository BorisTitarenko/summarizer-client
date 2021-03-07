
import React from 'react';
import { GoogleLogout } from 'react-google-login';
import {useAuth} from './AuthContext'

const clientId = '803410015728-a0oqvinfell4a4is9parp8qeu7ka2bur.apps.googleusercontent.com';

function Logout() {
  const auth = useAuth();

  const onSuccess = () => {
    console.log('Logout made successfully');
    auth.logout();
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
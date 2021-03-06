
import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '803410015728-a0oqvinfell4a4is9parp8qeu7ka2bur.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
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
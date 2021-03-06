
import React from 'react';
import './App.css';
import Login from './Login/Login';
import Logout from './Login/Logout';

function App() {
  return (
    <div className="App">
      <h2>The Components way</h2>
      <Login />
      <br />
      <Logout />
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import Login from './UserForms/Login';
import Signup from './UserForms/Signup';

function App() {
  return (
    <div className="App">
       <h1>Welcome</h1>
       <Signup />
      <Login />
     </div>
  );
}

export default App;

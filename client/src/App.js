import React from 'react';
import './App.css';
import Login from './Components/UserForms/LoginForm';
import Signup from './Components/UserForms/SignupForm';



function App() {
  return (
    <div className="App"> 
      <Signup />
      <Login />
     </div>
  );
}

export default App;

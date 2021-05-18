import React from 'react';
import './App.css';
import { Login, Signup } from './Components/UserForms';


function App() {
  return (
    <div className="App">
        
        <Signup />
        <Login />
     </div>
  );
}

export default App;

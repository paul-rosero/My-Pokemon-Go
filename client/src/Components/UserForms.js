import React, { useState } from 'react';

export const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    return (
        <div className="form">
            <h1>Signup to Enjoy the Fun.</h1>
            <label>Pokemon Go Username: </label>
            <input type="text" onChange={(e) => {setUsername(e.target.value)}} /><br/>

            <label>Password: </label>
            <input type="password" onChange={(e) => {setPassword(e.target.value)}} /><br/>

            <label>Email: </label>
            <input type="email" onChange={(e) => {setEmail(e.target.value)}} /><br/>

            <label>Name: </label>
            <input type="text" onChange={(e) => {setName(e.target.value)}} /><br/>

            <button>Sign up</button>
        </div>
    )
}

export const Login = () => {
    return (
        <div className="form">
            <h1>Welcome Back!</h1>
            <h3>Put your information to login.</h3>

            <label>Email: </label>
            <input type="email" /><br/>

            <label>Password: </label>
            <input type="password" /><br/>

            <button>Log in</button>
        </div>
    )
}

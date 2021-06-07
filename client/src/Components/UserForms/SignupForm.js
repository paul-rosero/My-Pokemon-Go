import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    axios.defaults.withCredentials = true;

    const signupUser = () => {
        axios.post('http://localhost:5000/api/v1/users/signup', { username, name, email, password })
        .then(({ data }) => console.log("promise", data))
    };

    return (
        <div className="form">
            <h1>Signup to Enjoy the Fun.</h1>
            <label>Pokemon Go Username: </label>
            <input type="text" onChange={ ({ target }) => { setUsername(target.value) } } /><br/>

            <label>Password: </label>
            <input type="password" onChange={ ({ target }) => { setPassword(target.value) } } /><br/>

            <label>Email: </label>
            <input type="email" onChange={ ({ target }) => { setEmail(target.value) } } /><br/>

            <label>Name: </label>
            <input type="text" onChange={ ({ target }) => { setName(target.value) } } /><br/>

            <button onClick={ signupUser }>Sign up</button>
        </div>
    )
}

export default SignupForm;
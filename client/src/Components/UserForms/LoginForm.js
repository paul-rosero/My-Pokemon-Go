import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState("");

    axios.defaults.withCredentials = true;

    const loginUser = () => {
        console.log("loggedIn 1", loggedIn)
        axios.post('http://localhost:5000/api/v1/users/login', { username, password })
        .then(({ data }) => {
            if (data.message) {
                setLoggedIn(data.message);
            } else {
                console.log("loggedIn 2", loggedIn)
                setLoggedIn(data.rows[0]);
            };
        });
    };

    useEffect(() => {
        try {
            axios.get('http://localhost:5000/api/v1/users/login')
                .then(({ data }) => {
                    if (data.loggedIn === true) {
                        setLoggedIn(data.user[0])
                    }; 
                })    
        } catch (error) {
                if (axios.isAxiosError(error)) {
                    
                  } else {
                   
                  }
            }
       
    //    .catch(error => {
    //         if (error.response) {
    //             // The request was made and the server responded with a status code
    //             // that falls out of the range of 2xx
    //             console.log(error.response.data);
    //             console.log(error.response.status);
    //             console.log(error.response.headers);
    //         } else if (error.request) {
    //             // The request was made but no response was received
    //             // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    //             // http.ClientRequest in node.js
    //             console.log(error.request.onreadystatechange());
    //         } else {
    //             // Something happened in setting up the request that triggered an Error
    //             console.log('Error', error.message);
    //         }
    //         console.log(error.config);
    //     })
    }, []);

    return (
        <div className="form">
            <h1>Welcome Back!</h1>
            <h3>Put your information to login.</h3>

            <label>Pokemon Go Username: </label>
            <input type="text" onChange={ ({ target }) => { setUsername(target.value) } } /><br/>

            <label>Password: </label>
            <input type="password" onChange={ ({ target }) => { setPassword(target.value) } } /><br/>

            <button onClick={ loginUser }>Log in</button>
        </div>
    )
}

export default LoginForm;
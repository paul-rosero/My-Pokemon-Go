const router = require('express').Router();
const db = require('../db');
const bcrypt = require('bcrypt');
const app = require('../app');

//Signup User
router.post("/users/signup", (req, res) => {
    const { username, name, email, password } =req.body;

    bcrypt.hash(password, 10, (error, hash) => {
        if (error) {
            res.json(error);
        };
        db.query("INSERT INTO users (username, name, email, password) VALUES ($1, $2, $3, $4) RETURNING *;", [username, name, email, hash], (err, result) => {
            if (err) {
                res.send({ error_message: "Username and/or Password can't be blank." });
            };
            res.json(result);
        });
    });
});
    
//Login User
router.post("/users/login", (req, res) => {
    const { username, password } = req.body;

    db.query("SELECT * FROM users WHERE username = $1", [username], (err, result) => {
        if (err) {
            res.json({ err });
        };
        if (result.rows.length > 0) {
            bcrypt.compare(password, result.rows[0].password, (error, response) => {
                if (response) {
                    req.session.user = result;
                    res.json(result);
                } else {
                    res.json({ error_message: "Username is correct. Wrong password entered. Please enter again" });
                };
            });
        } else {
            res.json({ error_message: "Incorrect Username. Please enter again" });
        };
    });
});

//Check if LoggedIn
router.get('/users/login', (req, res) => {
    if(req.session.user) {
        res.json({ loggedIn: true, user: req.session.user });
    } else {
        res.json({ loggedIn: false });
    };
});
    
//Get All Users
router.get("/users", (req, res) => {
    db.query("SELECT * FROM users", (err, result)=>{
        if (err) {
            console.error(err);
        };
            
        res.status(200).json({
            success: 'true',
            users: result.rows.length, 
            data: {
                users : result.rows
            }
        });
    });
});
    
//Get A User
router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM users WHERE user_id = $1', [id], (err, result) => {
        if (err) {
            console.log(err);
        };
        res.status(200).json({
            success: 'true',
            data: {
                user : result.rows[0]
            }
        });  
    });
});

//Edit User
router.put("/users/:id", (req, res) => {
    const { id, username, name, email, password } = req.body;

    db.query("UPDATE users SET username = $1, name = $2, email = $3, password = $4 WHERE user_id = $5 returning *", [username, name, email, password, id], (err, result) => {
        if (err) {
            console.error(err);
        };
        res.status(200).json({
            success: 'true',
            data: {
                user: result.rows[0]
            }
        });
    });
});
    
//Delete User
router.delete("/users/:id", (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Welcome',
        version: '1.0.0',
    });
});
    
module.exports = router;
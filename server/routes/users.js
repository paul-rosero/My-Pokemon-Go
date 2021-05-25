const router = require('express').Router();
const db = require('../db');

//Signup User
router.post("/users/signup", (req, res) => {
    const { username, name, email, password } =req.body;

    db.query("INSERT INTO users (username, name, email, password) VALUES ($1, $2, $3, $4) RETURNING *", [username, name, email, password], (err, result) => {
        if (err) {
            res.send(err);
        };
        res.json(result);
    });
});
    
//Login User
router.post("/users/login", (req, res) => {
    const { username, password } = req.body;

    db.query("SELECT * FROM users WHERE username = $1 AND password = $2", [username, password], (err, result) => {
        console.log(result.rows)
        if ( result.rows[0] ) {    
            res.send(result.rows[0]);
        }else {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ error_message: "Wrong username or/and password. Please try again!" });
            };
        };
    });
});
    
//Get All Users
router.get("/users", (req, res) => {
    db.query("SELECT * FROM users", (err, result)=>{
        if (err) {
            console.error(err)
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
            console.log(err)
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
            console.error(err)
        };
        res.status(200).json({
            success: 'true',
            data: {
                user: result.rows[0]
            },
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
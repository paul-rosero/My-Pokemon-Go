const router = require('express').Router();
const db = require('../db');

//User Routes:
    //Signup User
    router.post("/signup", (req, res) => {
        
    });
    
        //Login User
    router.post("/login", (req, res) => {
        
    });
    
        //Get All Users
    router.get("/users", (req, res) => {
        res.status(200).send({
            success: 'true',
            message: 'Welcome',
            version: '1.0.0',
          });
    });
    
        //Get A User
    router.get("/:id", (req, res) => {
    
    });
    
        //Edit User
    router.put("/:id", (req, res) => {
    
    });
    
        //Delete User
    router.delete("/:id", (req, res) => {
    
    });
    
    module.exports = router;
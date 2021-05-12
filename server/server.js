import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors"
import db from "./db/index.js";

const app = express();
const port = process.env.DB_PORT || 3001;

//middleware
app.use(express.json())
app.use(cors())

//User Routes:
    //Signup User
app.post("/api/v1/signup", (req, res) => {
    
});

    //Login User
app.post("/api/v1/login", (req, res) => {

});

    //Get All Users
app.get("/api/v1/users", (req, res) => {

});

    //Get A User
app.get("/api/v1/user/:id", (req, res) => {

});

    //Edit User
app.put("/api/v1/user/:id", (req, res) => {

});

    //Delete User
app.delete("/api/v1/users/:id", (req, res) => {

});


app.listen(port, () => {
    console.log(`Server is up and running on ${ port }`)
})


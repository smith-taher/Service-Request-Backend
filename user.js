const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pg = require('pg-promise')();

const dbConfig = {
    host:process.env.HOST,
    port:process.env.PORT,
    database: process.env.DB,
    user:process.env.USERNAME
};

const db = pg(dbConfig);

const createUser = async (object) => {
    console.log(object);
    let { username, email, phone, hash } = object;
    hash = await bcrypt.hash(hash, 10);
    let user = { username, email, phone, hash }
    return user;
}

const addUserToDatabase = async ({ username, hash, phone, email }) =>
    await db.query(`INSERT into users (username, hash, phone, email) 
    VALUES(
        "${username}", "${hash}", "${phone}",
        "${email}" )`
    );


router.post('/signup', async (req, res, next) => {
    let user = await createUser(req.body);
    console.log(user);
    let createdUser = await addUserToDatabase(user);
    
});

router.get('/signup', (req, res) => {
    res.send("Sign up");
});

router.get('/signin', (req, res) => {
    res.send("Sign in");
});

router.get('/profile', (req, res) => {
    res.send("Your Profile");
});

router.get('/admin', (req, res) => {
    res.send("Admin Only");
});

module.exports = router;
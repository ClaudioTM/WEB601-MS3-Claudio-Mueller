const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    },
}));

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Password",
    database: "LoginSystem",
});

app.post('/register', (req, res)=> {

    const username = req.body.username;
    const password = req.body.password;

    bcrypt.hash(password,saltRounds, (err, hash) => {

        if (err) {
            console.log(err)
        }

        db.query("INSERT INTO users (username, password) VALUES (?,?)", 
        [username, hash], 
        (err, result)=>{
            console.log(err);
        });
    })
});

app.get("/login", (req, res)=>{
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user});
    } else {
        res.send({loggedIn: false});
    }
});

app.get("/logout", (req, res)=>{
    if (req.session.user){
        res.clearCookie('userId');
        res.send({loggedIn: false});
    }
});

app.post('/login', (req, res)=> {
    console.log('req body isssssss', req.body)
    const username = req.body.username;
    const password = req.body.password;


    db.query(
    "SELECT * FROM users WHERE username = ?;", 
    username, 
    (err, result)=>{
        if (err){
            console.log('login error', err);
            res.send({ err: err })
        }
        console.log('result is', result)
            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (err, response) => {
                    if (response) {
                        req.session.user = result;
                        console.log(req.session.user);
                        res.send(result)
                    } else {
                        res.send({message: "Wrong username/password combination!"});
                    }
                });
            } else {
                res.send({message: "User doesn't exist"});
            }
        
    });
});

app.post('/addcomment', (req, res)=> {
    const userId = req.body.userID;
    const comment = req.body.comment;

        db.query("INSERT INTO comments (comment, userID) VALUES (?,?)", 
        [comment, userId], 
        (err, result)=>{
            if(err) {
                console.log('error adding comment', err);
                return;
            }
            console.log('comment result is', result)
            res.send(result);
        });
});

app.get('/retrievecomments', (req, res)=> {
    
        //db.query("SELECT * FROM comments",
        db.query("SELECT users.username, comments.`comment` FROM users INNER JOIN comments ON users.ID = comments.userID",
        (err, result)=>{
            if(err) {
                console.log('error retrieving comments', err);
                return;
            }
            console.log('all comments', result)
            res.send(result);
        });
});

app.listen(7000), () => {
    console.log("running server");
}
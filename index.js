const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const Sequelize = require('Sequelize');
const passport = require('passport');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('./config/passport.js')(passport);


//Uncomment the below to use with local host
/*const sequelize = new Sequelize('developer_portfolio', 'root', null, {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    //storage: 'Chinook_Sqlite_AutoIncrementPKs.sqlite'
});*/

//Use the below for RDS
//1. update host name to the RDS endpoint
//2. Ensure that the VPC security group setup in RDS allows all inbound traffic
const db = require('./models');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/client/public')));

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(passport.initialize());
app.use(passport.session());


app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms



//Test the Connection
db.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

//Define the model
const developers = db.sequelize.define(
    'developers',
    {
        userId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        userName: Sequelize.STRING,
        email: Sequelize.STRING,
        phone: Sequelize.STRING,
        gitHubHandle: Sequelize.STRING
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));


// An api endpoint that returns a list of all users
app.get('/api/users', (req, res) => {
    developers.findAll()
        .then(users => { console.log(users); res.json(users) })
    /*
    var list = ["item1", "item2", "item3"];
    res.json(list);
    */
    console.log('Sent list of items');
});

// An api endpoint that returns a user
app.get('/api/:username', (req, res) => {
    developers.findOne({
        where: {
            UserName: parseInt(req.params.username)
        }
    })
        .then(user => { res.json(user) })
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const Sequelize = require('Sequelize');
const passport = require('passport');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

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


app.use(cors());
app.use(fileUpload());

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

//Endpoint for uploading a profile pic
app.post('/users/profilePic/upload', (req, res) => {
    let imageFile = req.files.file;
    //console.log(req.user.annotation_id);

    imageFile.mv(`${__dirname}/images/${req.body.filename}.jpg`, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        console.log(req.body.userName);

        //Add filepath to db 
        db.developers.update({
            imageURL: `${__dirname}/images/${req.body.filename}.jpg`,
        }, {
                where: { userName: req.body.userName },
            }).then(res.json({ file: `images/${req.body.filename}.jpg` }))
    });

})

//Endpoint for updating a profile pic
app.post('/users/profilePic/replace', (req, res, next) => {
    //console.log(req);
    let imageFile = req.files.file;

    developers.findOne({
        where: { userName: req.body.userName },
        attributes: [`imageURL`]
    }).then((imageURL) => {
        //Delete existing image
        fs.unlink(imageURL, (err) => {
            console.log('deleted existing, now to replace');
            if (err) {
                return res.status(500).send(err);
            }

            //Replace with new image
            imageFile.mv(`${__dirname}/images/${req.body.filename}.jpg`, (err) => {
                if (err) {
                    return res.status(500).send(err);
                }

                console.log('new image added to the file system');

                //Update filepath in db 
                developers.update({
                    imageURL: `${__dirname}/images/${req.body.filename}.jpg`,
                }, {
                        where: { userName: req.body.userName },
                    }).then(res.json({ file: `images/${req.body.filename}.jpg` }))
            })
        })
    }
    )
})

//Endpoint for deleting a profile pic
app.post('/users/profilePic/delete', (req, res, next) => {
    //console.log(req.body);

    developers.findOne({
        where: { userName: req.body.userName },
        attributes: [`imageURL`]
    }).then((imageURL) => {
        console.log(imageURL.get().imageURL);
        fs.unlink(imageURL.get().imageURL, (err) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }

            //Delete filepath in db, set imageURL to null and return
            developers.update({
                imageURL: null,
            }, {
                    where: { userName: req.body.userName },
                }).then(res.json({ file: `` }))
        })
    }
    )

})



// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
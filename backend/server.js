const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); //connect to database mongodb atlas

require('dotenv').config();

const app = express(); // create express server
const port = process.env.PORT || 5000;

// midleware
app.use(cors());
app.use(express.json()); // allow us to parse json

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,
    {
        useNewUrlParser: true,
        useCreateIndex: true
    });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDb database connection established successfully');
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter); // loads excersices router
app.use('/users', usersRouter); // loads user router

// starting the server
app.listen(port, () => {
    console.log(`server is runnin on port: ${port}`);
})
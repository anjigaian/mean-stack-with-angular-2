const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/db');
const path = require('path');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.url, (err)=>{
    if(err){
        console.log('There is an error in connecting to Database');
    }else{
        // console.log("Secret: ", config.secret);
        console.log('Monngoose Connected to the database name: ' + config.db)
    }
});


app.use(express.static(__dirname + '/client/dist/'));
app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/dist/index.html'));
});

const port = 3000;
app.listen(port, ()=>{
    console.log('Server is Listening on Port number : ', port);
})
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/database');


configDotenv.config()

const app = express();

app.use(express.json()) // middleware
const port = 5000;

//connect to mongoDB
connectDB

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})
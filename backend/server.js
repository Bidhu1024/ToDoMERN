const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/database');
const dotenv = require('dotenv')
const Todo = require('./models/Todo.js')
const todoRoutes =  require('./routes/todoRoutes.js')
dotenv.config()

const app = express();
app.use(cors());

app.use(express.json())
const port = process.env.port ||5000;

app.use('/api/todos',todoRoutes)


app.listen(port,()=>{
    connectDB()
    console.log(`Server is running at ${port}`)
})
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/database');
const dotenv = require('dotenv')
const Todo = require('./models/Todo.js')
dotenv.config()

const app = express();

app.use(express.json()) // middleware
const port = 5000;

//connect to mongoDB


//api

// app.get('/add-sample', async (req, res) => {
//     try {
//         const sampleTodo = new Todo({
//             title: 'Learn MERN Stack',
//         });

//         await sampleTodo.save(); // Save to the database
//         res.status(201).send('Sample TODO created successfully!');
//     } catch (error) {
//         res.status(500).send('Error creating TODO: ' + error.message);
//     }
// });

app.listen(port,()=>{
    connectDB()
    console.log(`Server is running at ${port}`)
})
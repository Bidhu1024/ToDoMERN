const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const port = 5000;

//connect to mongoDB

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})
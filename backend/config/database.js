const mongoose = require('mongoose')

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('connected to Mongo')
    }catch(err){
        console.log('Database connection failed with error',err)
        process.exit(1)
    }
}
module.exports = connectDB
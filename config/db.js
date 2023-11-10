const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Mongodb ${mongoose.connection.host}`);
    }
    catch(error){
        console.log(`Mongodb Error ${error}`.bgRed.white)
    }
};

module.exports = connectDB;
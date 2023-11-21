const mongoose= require('mongoose');

const connectDb = async ()=>{
    await mongoose.connect('mongodb+srv://sobii1107:12345@cluster0.wuao5n9.mongodb.net/');
    console.log("database connection established");
};


 module.exports = connectDb;
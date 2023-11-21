const express= require('express');
const app = express();
const PORT= 4566;
const connectdb = require("./config/connectDb");
const User = require("./models/user.model")
const bodyParser = require('body-parser')
connectdb();

var cors = require('cors')
app.use(cors("*"))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/user",async (req, res)=>{
    try{
        const payload = req.body;
        const user=await User.create(payload)
        res.json(user)
    }
    catch(err){
        console.log(err)
    }
})
app.use("/getUser",async (req, res)=>{
    try{
        const user = await User.find()
        res.json(user)
    }
    catch(err){
        console.log(err)
    }
})

app.listen (PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});
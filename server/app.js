const express = require('express');
const mongoose = require('mongoose');
const app = express()


let chatSchema =  mongoose.Schema({
    msg_id = mongoose.Schema.Types.ObjectId,
    _id : {type: String, require: true},
    message : {type: String, require: true },
    createdAt : {type : Date , default : Date.now}

})

mongoose.model('Chat',chatSchema);

app.get('/',(req,res)=>{
    console.log("Hello")
    res.send("Hello")
})

module.exports = app;
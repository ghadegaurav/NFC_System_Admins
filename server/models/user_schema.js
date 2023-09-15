// const mongoose = require('mongoose')
import mongoose from 'mongoose';


const userschema = new mongoose.Schema({

    fname: {type: String,required: true},
    lname: {type: String,required: true},
    adhar_pan: {type: Number,required: true},
    email: {type: String,required: true},
    gender: {type: String,required: true},
    dob: {type: Date,required: true},
    phone: { type: Number, required: true },
    password: { type: String, required: true }

})

const UserModel = mongoose.model("User", userschema);

// module.exports = User;

export default UserModel;
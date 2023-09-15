// const mongoose = require('mongoose')
import mongoose from 'mongoose';


const userschema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {

        type: String,
        required: true

    },
    phone: { type: Number, required: true },
    pass: { type: String, required: true }

})

const UserModel = mongoose.model("User", userschema);

// module.exports = User;

export default UserModel;
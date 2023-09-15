// const mongoose = require('mongoose')
import mongoose from 'mongoose';


const schemeschema = new mongoose.Schema({
    name: { type: String, required: true },
    name: { type: String, required: true },
    option: { type: Array},
    tier: { type: String},
    max_deduction: { type: Number, required: true }
})

const UserModel = mongoose.model("Scheme", schemeschema);

// module.exports = User;

export default UserModel;
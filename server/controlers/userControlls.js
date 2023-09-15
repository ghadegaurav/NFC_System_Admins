import { dirname } from 'path';
import { fileURLToPath } from 'url';
import FormData from 'form-data';
import fs from 'fs';
import axios from 'axios';
import request from 'request-promise-native';
import UserMode from '../models/scheme_schema.js'
import UserModel from '../models/user_schema.js'
import mongoose from 'mongoose';

const __dirname = dirname(fileURLToPath(import.meta.url));

class UserControlsers {


    static Data = async (req, res) => {


        try {
            console.log("hi in server")
            const result = await UserMode.find({});

            console.log(result)

            res.json(result)

        } catch (error) {
            console.log(error)

        }
    }

    static login = async (req, res) => {

        console.log("hi")
        const email = req.query.email;
        const password = req.query.password;

        try {
            console.log(email)
            console.log(password)
            const result = await UserModel.findOne({ email: email });
            if (result == null) {
                console.log("unsuccessful bc")
            }
            else if (result.password == password) {
                console.log("Login Succesful!!");
            }
            else {
                console.log("wrong")
            }
        } catch (error) {
            console.log(error)
        }
    }

    static register = async (req, res) => {
        console.log("in server")
        const { fname,lname,dob,gender,phone, adhar_pan,email, password, confirmPassword } = req.body
        console.log(req.body)
        try {
            const doc = new UserModel({
                fname,lname,adhar_pan,email,gender,dob,phone,password
            })
            await doc.save().then(() => {
                console.log("success")
                return res.status(201).json({ message: "success" })
            }).catch((err) => {

                console.log(err)
                return res.status(422).json({ message: "error" })
            })
        } catch (error) {
            console.log(error)
            return res.status(422).json({ message: "error" })

        }



    }

}

export default UserControlsers;
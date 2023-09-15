import { dirname } from 'path';
import { fileURLToPath } from 'url';
import FormData from 'form-data';
import fs from 'fs';
import axios from 'axios';
import request from 'request-promise-native';
import UserMode from '../models/scheme_schema.js'
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

}

export default UserControlsers;
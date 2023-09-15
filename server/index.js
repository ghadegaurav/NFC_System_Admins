import dotenv from 'dotenv';
import mon from 'mongoose'
import express, { urlencoded } from 'express';
import { dirname } from 'path';
import path from 'path'
import { fileURLToPath } from 'url';
import web from './routes/web.js'
import multer from 'multer';
const app = express()

app.use(express.json({ limit: '10mb' }));

const upload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "uploads");
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname);
      },
    }),
  });
  app.use(upload.single("file"))


const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: './config.env' });

app.use(express.static('public'))

// import conn from './connection.js'

const DB = process.env.DATABASE;

mon.set('strictQuery', false);

app.use(express.urlencoded({ extended: true }))

mon.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: {
      w: 'majority',
    },
}).then(() => { console.log("yeeeeeeeeeeeeee") }).catch(err => { console.log() })

app.use('/', web);

app.listen(process.env.PORT, () => {

    console.log(`server is running ${process.env.PORT}`)

})
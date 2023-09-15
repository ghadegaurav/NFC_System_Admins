
// const mon = require('mongoose')

import mon from 'mongoose'

mon.set('strictQuery', false);

const DB = process.env.DATABASE;

mon.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log("yeeeeeeeeeeeeee") }).catch(err => { console.log() })


export default mon.connect
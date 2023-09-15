const express = require('express')
const router = express.Router();
const path = require('path')



router.get('/',(req,res)=>{

    console.log("inside root")
    res.sendFile(path.join(__dirname+'/index.html'));

})

router.post('/register',(req,res)=>{

    console.log("inside register");

    console.log(req.body);
    res.json({message:req.body});
    

})

module.exports = router;
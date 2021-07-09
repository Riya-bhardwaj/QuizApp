const express = require('express');
const User = require('../models/userSchema');
const router = express.Router();
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcryptjs');

router.get('/',(req,res)=>{
 res.send(`hello`);
});


router.post('/register',async(req,res)=>{
    const {studentId,name, email, phone, password, cpassword} = req.body;
    if(!name|| ! email || !phone || !password || !cpassword || !studentId){
        return res.status(422).json({error:"plz filled the filed properly"});
    }
    try{
        const userExist = await User.findOne({email:email});
        if(userExist){
            return res.status(422).json({error:"Email alreay Exists"});
        }
        else if(password != cpassword){
            return res.status(422).json({error:"Email alreay Exists"});
        }
        else{ 
        const user = new User({studentId,name,email,phone,password,cpassword});
        
        const userRegister = await user.save();
      
        res.status(201).json({message:"user registered successfully"});
        }
    }catch(err){
        console.log(err);
    }
});



module.exports = router;
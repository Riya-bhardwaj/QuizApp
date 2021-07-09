
const express = require('express');
const User = require('../models/userSchema');
const router = express.Router();
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcryptjs');router.post('/signin',async(req,res)=>{
    try{ 
        let token;
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({erorr:"Plz filled the details"});
        }
        const userLogin = await User.findOne({email:email});
        if(userLogin){
        const isMatch = await bcrypt.compare(password,userLogin.password);
        token = await userLogin.generateAuthToken();
        res.cookie("jwtoken",token,{
            expires:new Date(Date.now()+25892000000),
            httpOnly:true
        })

        
        //console.log(token);
        if(!isMatch){
            return res.status(400).json({erorr:"Invalid Credientials"});
        } 
        else{
        return res.json({message:"User Signin Successfully"});
        } 
    }
    else
    {
        return res.status(400).json({erorr:"Invalid Credientials"});
    }      
    }catch(err){
        console.log(err);
    }
}); 

module.exports = router;
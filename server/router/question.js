const express = require('express');
const Contest = require('../models/contest');
const Ques = require('../models/question');
const router = express.Router();
router.post('/questionBank',async(req,res)=>{
    const {questionId, question,option,correctAnswer} = req.body;
    if(!questionId || !question || !option || !correctAnswer){
        return res.status(400).json({erorr:"Plz filled the details"});
    }
    try{
        const quesExist = await Ques.findOne({questionId:questionId});
        if(quesExist){
            return res.status(422).json({error:"questionId alreay Exists"});
        }
        else{ 
            const ques = new Ques({questionId,question,option,correctAnswer});
            await ques.save();
            return res.json({message:"question uplaoded Successfully"});  
        }
}catch(err){
    console.log(err);
}
}); 



module.exports = router;
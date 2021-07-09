const express = require('express');
const ansEntry= require('../models/ansEntry');
const router = express.Router();
router.post('/contest',async(req,res)=>{
    const {studentId, contestId,questionId, optionChosen} = req.body;
    if(!studentId, !contestId,!questionId,! optionChosen){
        console.log(req.body);
        return res.status(400).json({erorr:"Plz filled the details"});
    }
    try{
        const qId = await ansEntry.findOne({questionId:questionId});
        if(qId){
            return res.status(422).json({error:"questionId alreay Exists"});
        }
        else{ 
            const ans = new ansEntry({studentId, contestId,questionId, optionChosen});
            await ans.save();
            return res.json({message:"Answer uplaoded Successfully"});  
        }
}catch(err){
    console.log(err);
}
}); 



module.exports = router;
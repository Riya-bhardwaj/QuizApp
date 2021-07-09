const express = require('express');
const Contest = require('../models/contest');
const router = express.Router();
router.post('/createContest',async(req,res)=>{
    const {contestId, noOfQquestion,nameOfContest,startTime,endTime,allowForAll,allowUser,marksPerQues,negativeMarks} = req.body;
    if(!contestId || !noOfQquestion || !nameOfContest || !startTime || !endTime || !allowForAll || !allowUser || !marksPerQues || !negativeMarks){
        console.log(req.body);
        return res.status(400).json({erorr:"Plz filled the details"});
    }
    try{
        const contestExist = await Contest.findOne({contestId:contestId});
        if(contestExist){
            return res.status(422).json({error:"contestId alreay Exists"});
        }
        else{ 
            const contest = new Contest({contestId, noOfQquestion,nameOfContest,startTime,endTime,allowForAll,allowUser,marksPerQues,negativeMarks});
            await contest.save();
            return res.json({message:"contest uplaoded Successfully"});  
        }
}catch(err){
    console.log(err);
}
}); 

module.exports = router;
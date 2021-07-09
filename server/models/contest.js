const mongoose = require('mongoose');
const contestSchema = new mongoose.Schema({
    contestId:{
        type:String,
        required:true
    },
    noOfQquestion:{
        type:Number,
        required:true
    },
    nameOfContest:{
        type:String,
        required:true
    },
    startTime:{
        type:Date,
        default: Date.now
    },
    endTime:{
        type:Date,
        default: Date.now
    },
    allowForAll:{
        type:Boolean,
        required:true
    },
    allowUser:[
            {
                type:String,
                required:true
            }
    ],
    marksPerQues:{
        type:Number,
        required:true
    },
    negativeMarks:{
        type:Number,
        required:true
    }
})

const Contest = mongoose.model('contest',contestSchema);
module.exports = Contest; 
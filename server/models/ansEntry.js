const mongoose = require('mongoose');
const ansEntrySchema = new mongoose.Schema({
    studentId:{
        type:Number,
        required:true
    },
    contestId:{
        type:String,
        required:true
    },
    questionId:{
        type:String,
        required:true
    },
    optionChosen:{
        type:String,
        required:true
    }
})

const ansEntry = mongoose.model('answerEntries',ansEntrySchema);
module.exports = ansEntry; 
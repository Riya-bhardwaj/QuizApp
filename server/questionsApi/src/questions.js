const mongoose = require("mongoose");


const questionSchema = new mongoose.Schema({
    questionId:{
        type:String,
        required:true,
    },

    Statement:{
        type:String,
        required:true,
    },
    options:{
        type:[
            {
                optionId:{Number},
                option:{String},
            }
        ],
        required:true
    },
    correctAns:{
        type:String,
        required:true
    }
    
},{ timestamps: true })
// we will create a new collection
const Question = new mongoose.model('Bug',questionSchema);
module.exports = Question;
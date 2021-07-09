const mongoose = require('mongoose');
const questionsSchema = new mongoose.Schema({
    questionId:{
        type:String,
        required:true
    },
    question:{
        type:String,
        required:true
    },
    option:[
            {
                type:String,
                required:true
            }
    ],
    correctAnswer:{
        type:String,
        required:true
    }
})

const Ques = mongoose.model('ques',questionsSchema);
module.exports = Ques; 
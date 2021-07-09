const express = require("express");
const app = express();
const port = 5000;
const cors = require('cors');
require("./conn");
const Question = require("./questions");

// jo bhi object aa rha h use json me read krne k liye
app.use(express.json());
app.use(cors("*"));
app.post("/questions",async(req,res)=>{
   try{
    const user= new Question(req.body);
    const createQuestion = await user.save();
    res.status(201).send(createQuestion);
   }catch(e){
      res.setMaxListeners(400).send(e);
   }
})

// read the data
app.get("/questions",async(req,res)=>{
  try{
      const data= await Questions.find();
      res.send(data);
  }catch(e){
    res.send(e);
  }
})


app.patch("/questions/:id",async(req,res)=>{
  try{
      const _id = req.params.id;
      const updateQuestion = await Bug.findByIdAndUpdate(_id,req.body,{
        new:true
      });
      res.send(updateQuestion);

  }catch(e){
      res.status(404).send(e);
  }
})

delete
app.delete("/questions/:id",async(req,res)=>{
    try{
        const deleteQuestion = await Bug.findByIdAndDelete(req.params.id);
        if(!req.params.id){
          return res.status(400).send();
        }
        res.send(deleteQuestion);
    }catch(e){
      res.status(500).send(e);
    }
})

app.listen(port,()=>{
    console.log('connection is setup');
})
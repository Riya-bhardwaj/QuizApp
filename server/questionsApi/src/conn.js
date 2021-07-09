const mongoose =require("mongoose");

const connect = process.env.DATABASE
mongoose.connect(connect,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false 
}).then(()=>{
    console.log("connection is successful");
}).catch((e)=>{
    console.log("no connection");
})
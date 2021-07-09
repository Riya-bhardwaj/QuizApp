const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});
const PORT = process.env.PORT
require('./db/conn');
app.use(express.json());
const User = require('./models/userSchema');
 
// we link the router files to make out router
app.use(require('./router/auth'));
app.use(require('./router/question'));
app.use(require('./router/login'));
app.use(require('./router/createContest'));
app.use(require('./router/contest'));

// middleware
const middleware = (req,res,next)=>{
    console.log('hello');
    next();
}

// app.get('/',(req,res)=>{
//     res.send('welcome to home');
// });


app.get('/contact',(req,res)=>{
    res.send('contact page');
});

// app.get('/login',(req,res)=>{
//     res.send('login');
// });
// app.get('/register',(req,res)=>{
//     res.send('register');
//     console.log('tgdgfgfgfdgg');
// });
app.get('/contest',middleware,(req,res)=>{
    //console.log('middleware')
    res.send('contest');
});


app.listen(PORT ,()=>{
    console.log(`server running on port ${PORT}`);
})
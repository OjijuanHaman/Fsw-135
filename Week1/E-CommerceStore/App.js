const express = require('express');
const app = express();

app.listen(3000,()=>{
    console.log("App is listening on port 3000")
});

const mongoose = require('mongoose')
mongoose.connect('mongodb: //localhost:27017/store',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false   
    },
    ()=> console.log('Connected to the DB')
)
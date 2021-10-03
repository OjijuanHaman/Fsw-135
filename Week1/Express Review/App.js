const express = require("express");
const app = express()

app.get('/', (req,res)=>{
    res.send("Good morning Jae");
});

app.listen(3000 , ()=> {
    console.log("app listening on port 3000")
});

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/moviesdb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log("Connected to the DB")
)
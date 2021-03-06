const express = require("express");
const app = express();
const morgan = require("morgan")
const mongoose = require("mongoose")

//middleware
app.use(express.json())
app.use(morgan('dev'))

//connect to DB


mongoose.connect('mongodb://localhost:27017/inventorydb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false   
    },
    ()=> console.log('Connected to the DB')
)

//route
app.use("/inventory", require("./routes/inventoryRouter"))

//error handler
app.use((err,req,res,next)=> {
    console.log(err);
    return res.send({errMsg:err.message})
})

app.listen(3000,()=>{
    console.log("App is listening on port 3000")
});
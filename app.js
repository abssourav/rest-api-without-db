const express=require('express');
const cors = require("cors");

const userRouter = require('./routes/users.route');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//routes
app.use("/users", userRouter)

//home route
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
})




//route not found error
app.use((req,res,next)=>{
    res.status(404).json({
        massage: "Route not found" 
    });
});


//server error
app.use((err,req,res,next)=>{
    res.status(505).json({
        massage: "something broken"
    });
});

module.exports = app;
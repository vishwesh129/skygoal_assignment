const expres = require('express');
const { connection } = require('./configs/db');
const userRouter = require('./Routes/User.route');
const authenticate = require('./Middlewares/authenticate');
const userDetailsRouter = require('./Routes/Details.route');
require('dotenv').config();

const app = expres();

app.use(expres.json());

app.get("/", (req, res) => {
    res.send("Home");
})

app.use('/user' , userRouter);

app.use('/details' , authenticate ,userDetailsRouter);

app.listen(8000, async()=>{
    try{
        await connection;
        console.log("Conected to DB");
    }
    catch(err){
        console.log(err);
        console.log("Error while connecting to DB")
    }
    console.log(`Listening on Port localhost:${process.env.PORT}` );
})
const express = require('express');
const couponsRouter=require('./routes/couponsRouter')
const reviewsRouter=require('./routes/reviewsRouter')
const roleRouter=require('./routes/roleRouter')
const userRouter=require('./routes/userRouter')
const errorHandler= require('./middleware/errorHandler.js')
const mongoLogger= require('./helpers/mongoLogger.js')
const loader = require("./loader");

const cors= require("cors")

const app=express();
app.use(loader);
app.use(express.json());
app.use(cors());


app.use(mongoLogger.storeEvent, couponsRouter,reviewsRouter,roleRouter,
    userRouter,errorHandler );
module.exports=app;

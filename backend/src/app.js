const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));
app.use(express.json());
app.use(cookieParser());
//routes imports 
const userRouter = require("./routes/user.routes");
const practicee = require("./routes/practice.routes")
const imgRouter = require("./routes/images.routes");
const ProductModels = require("./routes/product.routes")


//routes declaration
const prefix = '/api/v1'
app.use(`${prefix}/image`, imgRouter)
app.use(`${prefix}/users`, userRouter)
app.use(`${prefix}/pratice`, practicee)
app.use(`${prefix}/product`, ProductModels)

module.exports = { app }
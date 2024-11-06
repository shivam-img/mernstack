const express = require("express");
const Router = express.Router()
const { authorcollectionData , bookcollectionData , DatacollectionData } = require("../controllers/practice.controller.js");

Router.post("/auth", authorcollectionData);
Router.post("/book", bookcollectionData);
Router.post("/data", DatacollectionData);





module.exports = Router
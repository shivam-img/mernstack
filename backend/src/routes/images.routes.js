const express = require("express");
const Router = express.Router()
const { imagescollectionData, getAllImages, getUpdateImages, deleteImages } = require("../controllers/images.controller.js");
const upload = require("../middlewares/multer.middleware");
const verifyJWT = require('../middlewares/auth.middleware');



// const router = Router();


Router.post("/i", upload.single('image'), imagescollectionData);
Router.get("/i", getAllImages);
Router.put("/:id", upload.single('image'), getUpdateImages);
Router.delete("/:id", deleteImages);



module.exports = Router
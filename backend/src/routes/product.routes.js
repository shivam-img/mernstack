const express = require("express");
const router = express.Router();
const { ProductCollectionData, GetAllProduct } = require("../controllers/product.controller.js");
const upload = require("../middlewares/multer.middleware");



// router.route("/").post(ProductCollectionData);
router.post('/', upload.single('image'), ProductCollectionData);
router.get("/getAllProducts", GetAllProduct)



module.exports = router
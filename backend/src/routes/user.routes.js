const Router = require("express");
const { registreUser, loginUser, getCurrentUser, getUserLogout, getUserChangePasswords , GetRatingFromUser } = require("../controllers/user.controller");
const upload = require("../middlewares/multer.middleware");
const verifyJWT = require('../middlewares/auth.middleware');



const router = Router();


router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registreUser
);

router.route("/login").post(loginUser);
router.route("/getUserAllDetatils").get(verifyJWT, getCurrentUser);
router.route("/logout").get(verifyJWT, getUserLogout)
router.route("/change-password").post(verifyJWT , getUserChangePasswords)
router.route("/rating").post(verifyJWT , GetRatingFromUser );




module.exports = router;
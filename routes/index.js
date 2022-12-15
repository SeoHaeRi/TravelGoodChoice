var express = require("express")
var controller = require("../controller/Cfront")
const router = express.Router()

router.get("/",controller.front)
router.get("/login",controller.login)
router.get("/signup",controller.signup)
router.get("/search",controller.search)
router.get("/community",controller.community)


module.exports = router;
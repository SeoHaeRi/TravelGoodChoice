var express = require("express")
var controller = require("../controller/Cfront")
var router = express.Router()

router.get("/", controller.front)

router.get("/recommend", controller.recommend)
router.get("/signup", controller.signup)
router.get("/search", controller.search)
router.get("/community", controller.community)

router.get("/sights", controller.sights)

router.get("/chat", controller.chat)


module.exports = router;
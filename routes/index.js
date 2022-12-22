const express = require("express")
const controller = require("../controller/Cfront")
const router = express.Router()

router.get("/", controller.front)
router.post("/setpopup", controller.setpopup)

router.get("/recommend", controller.recommend)
router.get("/signup", controller.signup)
router.get("/search", controller.search)
router.get("/community", controller.community)
router.get("/contents", controller.contents)

router.get("/sights1", controller.sights1)
router.get("/sights2", controller.sights2)
router.get("/sights3", controller.sights3)

router.get("/chat", controller.chat)

module.exports = router;
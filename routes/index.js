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
router.get("/train", controller.train)

router.get("/sights1", controller.sights1)
router.get("/sights2", controller.sights2)
router.get("/sights3", controller.sights3)
router.get("/sights4", controller.sights4)
router.get("/sights5", controller.sights5)
router.get("/sights6", controller.sights6)

router.get("/worldcup", controller.worldCup)

router.get("/chat", controller.chat)

module.exports = router;
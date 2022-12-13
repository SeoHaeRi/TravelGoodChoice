var express = require("express")
var controller = require("../controller/Cfront")
const router = express.Router()

router.get("/",controller.front)


module.exports = router;
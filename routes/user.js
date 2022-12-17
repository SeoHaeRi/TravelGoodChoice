var express = require('express');
var controller = require('../controller/Cuser');
const multer = require("multer");
const path = require('path');
const router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'static/upload_img');
    },
    filename(req, file, done) {
      console.log("filename: ", req.body);
      const ext = path.extname(file.originalname);
      const filename = req.body.name + ext;
      done(null, filename);
    }
  })
})

router.get("/login", controller.view_login)
router.post('/signup', upload.single("userfile"), controller.signup);
router.post('/login', controller.login);
router.delete('/logout', controller.logout);

module.exports = router;
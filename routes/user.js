var express = require('express');
var controller = require('../controller/Cuser');
const multer = require("multer");
const path = require('path');
const router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      console.log("multer");
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

router.post('/signup', upload.single("userfile"), controller.signup);
// router.post('/signin', controller.signin);
// router.post('/profile', controller.profile);
// router.patch('/profile/edit', controller.edit_user);
// router.delete('/profile/delete', controller.delete_user);

module.exports = router;
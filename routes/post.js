var express = require('express');
var controller = require('../controller/Cpost');
const multer = require("multer");
const path = require('path');
const router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'static/post_img');
    },
    filename(req, file, done) {
      console.log("filename: ", req.body);
      const ext = path.extname(file.originalname);
      const filename = req.body.writer + ext;
      done(null, filename);
    }
  })
})

router.get('/view_post',controller.view_post)
router.post('/community', upload.single("community_file"), controller.community);
// router.post('/profile', controller.profile);
// router.patch('/profile/edit', controller.edit_user);
// router.delete('/profile/delete', controller.delete_user);

module.exports = router;
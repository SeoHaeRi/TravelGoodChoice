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
      const filename = req.body.title + ext;
      done(null, filename);
    }
  })
})

// community 페이지 렌더
router.get('/view_post', controller.view_post)
// commnunity 폼전송
router.post('/community', upload.single("community_file"), controller.community);

// community a태그 
router.get("/:index_number", controller.view_contents)

// contents 수정
router.patch("/modify",upload.single("modify_file"),controller.modify)

router.delete("/del_contents",controller.del_contents)



module.exports = router;
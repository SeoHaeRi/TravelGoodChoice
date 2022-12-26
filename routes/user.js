var express = require('express');
var controller = require('../controller/Cuser');
const multer = require("multer");
const path = require('path');
const router = express.Router();

/* user 프로필 업로드 */
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
    },
  }),
});

router.get('/login', controller.view_login)
router.post('/signup', upload.single("userfile"), controller.signup);
router.post('/login', controller.login);
router.delete('/logout', controller.logout);
router.get('/login/kakao', controller.view_kakaoLogin);
router.get('/kakao/finish', controller.kakaoLogin);
router.get('/logout/kakao', controller.view_kakaoLogout);
router.get('/kakao/logout', controller.kakaoLogout);
// router.get('/find',controller.find_index); 
// router.post('/modify',controller.pw_modify); 
// router.post('/update', controller.pw_update); 

module.exports = router;
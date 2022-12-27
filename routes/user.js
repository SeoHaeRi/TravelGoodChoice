var express = require('express');
var controller = require('../controller/Cuser');
const multer = require("multer");
const path = require('path');
const router = express.Router();
const mypage = require('../controller/CmyPage');

/* user 프로필 업로드 */
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'static/upload_img');
    },
    filename(req, file, done) {
      console.log("filename: ", req.body);
      const ext = path.extname(file.originalname);
      const filename = '/static/upload_img/' + req.body.name + ext;
      done(null, filename);
    },
  }),
});

router.post('/signup', upload.single("userfile"), controller.signup);
router.post('/signup/upload', upload.single("profileImg"), controller.signup);


router.get('/login', controller.view_login)
router.post('/login', controller.login);
router.get('/login/kakao', controller.view_kakaoLogin);
router.get('/kakao/finish', controller.kakaoLogin);

router.delete('/logout', controller.logout);
router.get('/logout/kakao', controller.view_kakaoLogout);
router.get('/kakao/logout', controller.kakaoLogout);

// router.post('/modify',controller.pw_modify); 
// router.post('/update', controller.pw_update); 

router.get('/mypage', checkSession, mypage.mypage_index);
router.post('/mypage', mypage.user_update);

router.post('/mypage/isName', mypage.isName);
/* 로그인 확인 미들웨어 */
function checkSession(req, res, next) {
  if (req.session.id != null && req.session.id != '') next();
  else {
    res.redirect('/login');
  }
}

module.exports = router;
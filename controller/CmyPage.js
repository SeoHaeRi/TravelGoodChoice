const e = require('express');
const Models  = require('../model');

exports.mypage_index = (req, res) => {
    let data
    if (req.session.user) {
        data = {
            id: req.session.user.id,
            pw: req.session.user.pw,
            name: req.session.user.name
        }
    } else if (req.session.kakao) {
        data = {
            id: req.session.kakao.id,
            pw: req.session.kakao.pw,
            name: req.session.kakao.name
        }
    }
    Models.User.findOne({ where: { id: data.id} })
    .then((result) => {
      res.render("mypage"); 
    });
}

  /* 비밀 번호 중복 확인 및 변경 */
  exports.post_modify = (req, res) => {
    if (req.session.user) {
        res.render("modify", {id: req.session.user.id, name: req.session.user.name});
    } else if (req.session.kakao) {
        res.render("modify", {id: req.session.kakao.id, name: req.session.kakao.id});
    }
}
  
//   exports.post_update = (req, res) => {
//     let data;
//     if (req.session.user) {
//         data = {
//             id: req.session.user.id,
//             pw: req.session.user.pw
//         }
//     } else if (req.session.kakao) {
//         data = {
//             id: req.session.kakao.id,
//             pw: req.session.kakao.pw
//         }
//     }
//     let newObj = {
//         pw : data.pw
//     };
//     Models.User.update( newObj, {where: {id: data.id}})
//     .then((result) => {
//         res.send('비밀번호 수정 성공!');
//     });
// }

exports.post_update = async (req, res) => {
    let data;
    if (req.session.user) {
        data = {
            id: req.session.user.id,
            pw: req.session.user.pw
        }
    } else if (req.session.kakao) {
        data = {
            name: req.body.name,
            id: req.session.kakao.id,
            pw: req.session.kakao.pw
        }
        .then(()=>{
        Models.User.update( data, {where: {id: data.id}})
        })
    .then(() => {
        res.send(true);
    })
}
};
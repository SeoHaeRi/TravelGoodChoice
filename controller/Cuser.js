const { User } = require("../model");
const { Op } = require('sequelize');
const axios = require('axios');

const kakao = {
  clientID: process.env.KAKAO_clientID,
  redirectUri: process.env.KAKAO_redirectUri,
  clientSecret: process.env.KAKAO_clientSecret,
  logoutRedirectUri: process.env.KAKAO_logoutRedirectUri
};
let accessToken;

exports.view_login = (req, res) => {
  res.render("login")
}

exports.signup = (req, res) => {
  let data;
  if (req.file) {
    data = {
      id: req.body.id,
      pw: req.body.pw,
      name: req.body.name,
      profile_img: req.file.filename,
    }
  } else {
    data = {
      id: req.body.id,
      pw: req.body.pw,
      name: req.body.name,
    }
  }

  User.findOne({ where: { [Op.or]: [{ id: data.id }, { name: data.name }] } })
    .then((result) => {
      if (result) res.send(false);
      else {
        User.create(data)
          .then(() => {
            res.send(true);
          })
      }
    })
}

exports.login = (req, res) => {
  let data = {
    id: req.body.id,
    pw: req.body.pw
  }
  User.findOne({ where: { id: data.id, pw: data.pw } })
    .then((result) => {
      if (result) {
        req.session.user = req.body.id;
        res.send(true)
      } else {
        res.send(false)
      }
    })
}

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.send(true);
  })
}
exports.view_kakaoLogout = (req, res) => {
  const kakaoLogout = `https://kauth.kakao.com/oauth/logout?client_id=${kakao.clientID}&logout_redirect_uri=${kakao.logoutRedirectUri}`;
  res.redirect(kakaoLogout);
}

exports.kakaoLogout = (req, res) => {
  console.log("logout: ", req);
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect('/');
  })
}

exports.view_kakaoLogin = (req, res) => {
  const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao.clientID}&redirect_uri=${kakao.redirectUri}&response_type=code`;
  res.redirect(kakaoAuthURL);
}

exports.kakaoLogin = async (req, res) => {
  //access토큰을 받기 위한 코드
  await axios({
    method: 'POST',
    url: 'https://kauth.kakao.com/oauth/token',
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    data: ({
      grant_type: 'authorization_code',//특정 스트링
      client_id: kakao.clientID,
      client_secret: kakao.clientSecret,
      redirect_uri: kakao.redirectUri,
      code: req.query.code,//결과값을 반환했다. 안됐다.
    })
  }).then((res) => {
    console.log("토큰 정보 : ", res.data);
    accessToken = res.data.access_token;
    return userInfo(res.data);
  }).then((user) => {
    console.log("user : ", user);
    console.log(req.data);

    // database에 있는 user면 그냥 바로 session, 없으면 create
    let data = {
      id: user.kakao_account.email,
      pw: '',
      name: user.properties.nickname,
      profile_img: user.properties.thumbnail_image,
      social_type: 'kakao'
    }

    User.findOne({ where: { [Op.or]: [{ id: data.id }, { name: data.name }] } })
      .then((result) => {
        if (result) {
          req.session.kakao = user.kakao_account.email;
          res.redirect('/');
        }
        else {
          User.create(data)
            .then(() => {
              req.session.kakao = user.kakao_account.email;
              res.redirect('/');
            })
        }
      })
  })
}

function userInfo(token) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'https://kapi.kakao.com/v2/user/me',
      headers: {
        Authorization: `Bearer ${token.access_token}`,
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }).then((res) => {
      resolve(res.data);
    })
  })
}
const { User } = require("../model");
const { Op } = require('sequelize');
const { axios } = require('axios');
const { qs } = require('qs');

const kakao = {
  clientID: process.env.KAKAO_clientID,
  redirectUri: process.env.KAKAO_redirectUri,
  clientSecret: process.env.KAKAO_clientSecret
};

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
      profile_img: req.file.filename
    }
  } else {
    data = {
      id: req.body.id,
      pw: req.body.pw,
      name: req.body.name,
      profile_img: ''
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

exports.view_kakaoLogin = (req, res) => {
  const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao.clientID}&redirect_uri=${kakao.redirectUri}&response_type=code`;
  res.redirect(kakaoAuthURL);
}

exports.kakaoLogin = async (req, res) => {
  let token;
  try {//access토큰을 받기 위한 코드
    token = axios({//token
      method: 'POST',
      url: 'https://kauth.kakao.com/oauth/token',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: ({
        grant_type: 'authorization_code',//특정 스트링
        client_id: kakao.clientID,
        client_secret: kakao.clientSecret,
        redirectUri: kakao.redirectUri,
        code: req.query.code,//결과값을 반환했다. 안됐다.
      })//객체를 string 으로 변환
    }).then((res) => {
      console.log("res : ", res);
    })
  } catch (err) {
    res.json(err.data);
  }

  //access토큰을 받아서 사용자 정보를 알기 위해 쓰는 코드
  let user;
  try {
    console.log(token);//access정보를 가지고 또 요청해야 정보를 가져올 수 있음.
    user = await axios({
      method: 'get',
      url: 'https://kapi.kakao.com/v2/user/me',
      headers: {
        Authorization: `Bearer ${token.data.access_token}`
      }//헤더에 내용을 보고 보내주겠다.
    })
  } catch (e) {
    res.json(e.data);
  }
  console.log(user);

  req.session.kakao = user.data;

  res.send('success');
}
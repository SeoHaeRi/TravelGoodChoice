const { User } = require("../model");
const { Op } = require('sequelize');

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
const { User } = require("../model");

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

  User.findOne({ where: { id: data.id, pw: data.pw } })
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

exports.login = async (req, res) => {
  let data = {
    id: req.body.id,
    pw: req.body.pw
  }
  let result = await User.findOne({ where: { id: data.id, pw: data.pw } });
  res.send(result);
}
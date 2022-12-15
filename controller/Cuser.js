const { User } = require("../model");

exports.signup = async (req, res) => {
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

  let result = await User.create(data);
  res.send(result);
}

exports.login = async (req, res) => {
  let data = {
    id: req.body.id,
    pw: req.body.pw
  }
  let result = await User.findOne({ where: { id: data.id, pw: data.pw } });
  res.send(result);
}
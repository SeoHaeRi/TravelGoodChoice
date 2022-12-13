const { User } = require("../model");

exports.signup = async (req, res) => {
  console.log("파일 : ", req.body);
  let data = {
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
    profile_img: req.body.profileImg
  }
  let result = await User.create(data);
  res.send(true);
}
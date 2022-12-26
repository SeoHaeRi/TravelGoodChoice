const { Comment, sequelize } = require("../model");

exports.addComment = async (req, res) => {
  let data;
  if (req.session.user) {
    data = {
      post_id: req.body.post_id,
      name: req.session.user.name,
      content: req.body.content,
      img: req.session.user.profile_img,
    }
  } else {
    data = {
      post_id: req.body.post_id,
      name: req.session.kakao.name,
      content: req.body.content,
      img: req.session.kakao.profile_img,
    }
  }

  let result = await Comment.create(data);
  res.send(result)
}
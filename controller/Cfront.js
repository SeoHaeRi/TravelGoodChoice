const fs = require('fs');

exports.front = (req, res) => {
  if (req.session.user) res.render("index", { islogin: true })
  else res.render("index", { islogin: false })
}
exports.recommend = (req, res) => {
  res.render("recommend")
}
exports.signup = (req, res) => {
  res.render("signup")
}
exports.search = (req, res) => {
  res.render("search")
}
exports.community = (req, res) => {
  res.render("community")
}
exports.contents = (req, res) => {
  res.render("contents")
}

exports.sights1 = (req, res) => {
  res.render("sights1")
}
exports.sights2 = (req, res) => {
  res.render("sights2")
}
exports.sights3 = (req, res) => {
  res.render("sights3")
}

exports.chat = (req, res) => {
  res.render("chat")
}
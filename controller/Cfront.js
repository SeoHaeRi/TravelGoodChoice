exports.front = (req, res) => {
  if (req.session.user) res.render("index", { islogin: true })
  else res.render("index", { islogin: false })
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
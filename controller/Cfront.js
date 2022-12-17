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

exports.sights = (req, res) => {
  res.render("sights")
} 
exports.chat = (req, res) => {
  res.render("chat")
}
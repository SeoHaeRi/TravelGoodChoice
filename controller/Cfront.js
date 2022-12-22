const fs = require('fs');

exports.front = (req, res) => {
  if (req.cookies.popup == "1") {
    if (req.session.user) {
      res.render("index", { islogin: true, iskakao: false, popup: "none" })
    } else if (req.session.kakao) {
      res.render("index", { islogin: true, iskakao: true, popup: "none" })
    }
    else res.render("index", { islogin: false, iskakao: false, popup: "none" })
  } else {
    if (req.session.user) {
      res.render("index", { islogin: true, iskakao: false, popup: "block" })
    } else if (req.session.kakao) {
      res.render("index", { islogin: true, iskakao: true, popup: "block" })
    }
    else res.render("index", { islogin: false, iskakao: false, popup: "block" })
  }
}

exports.setpopup = (req, res) => {
  if (req.body.value) {
    res.cookie("popup", "1", {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 1000,
    })
    res.send(true)
  } else {
    res.send(false)
  }
}


exports.recommend = (req, res) => {
  res.render("recommend")
}
exports.signup = (req, res) => {
  res.render("signup")
}
exports.search = (req, res) => {
  if (req.session.user) {
    res.render("search", { islogin: true, iskakao: false })
  } else if (req.session.kakao) {
    res.render("search", { islogin: true, iskakao: true })
  }
  else res.render("search", { islogin: false, iskakao: false })
}
exports.community = (req, res) => {
  if (req.session.user) {
    res.render("community", { islogin: true, iskakao: false })
  } else if (req.session.kakao) {
    res.render("community", { islogin: true, iskakao: true })
  }
  else res.render("community", { islogin: false, iskakao: false })
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
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
  if (req.session.user) {
    res.render("contents", { islogin: true, iskakao: false })
  } else if (req.session.kakao) {
    res.render("contents", { islogin: true, iskakao: true })
  }
  else res.render("contents", { islogin: false, iskakao: false })
}
exports.train = (req, res) => {
  if (req.session.user) {
    res.render("train", { islogin: true, iskakao: false })
  } else if (req.session.kakao) {
    res.render("train", { islogin: true, iskakao: true })
  }
  else res.render("train", { islogin: false, iskakao: false })
}

exports.sights1 = (req, res) => {
  if (req.session.user) {
    res.render("sights1", { islogin: true, iskakao: false })
  } else if (req.session.kakao) {
    res.render("sights1", { islogin: true, iskakao: true })
  }
  else res.render("sights1", { islogin: false, iskakao: false })
}
exports.sights2 = (req, res) => {
  if (req.session.user) {
    res.render("sights2", { islogin: true, iskakao: false })
  } else if (req.session.kakao) {
    res.render("sights2", { islogin: true, iskakao: true })
  }
  else res.render("sights2", { islogin: false, iskakao: false })
}
exports.sights3 = (req, res) => {
  if (req.session.user) {
    res.render("sights3", { islogin: true, iskakao: false })
  } else if (req.session.kakao) {
    res.render("sights3", { islogin: true, iskakao: true })
  }
  else res.render("sights3", { islogin: false, iskakao: false })
}
exports.sights4 = (req, res) => {
  if (req.session.user) {
    res.render("sights4", { islogin: true, iskakao: false })
  } else if (req.session.kakao) {
    res.render("sights4", { islogin: true, iskakao: true })
  }
  else res.render("sights4", { islogin: false, iskakao: false })
}
exports.sights5 = (req, res) => {
  if (req.session.user) {
    res.render("sights5", { islogin: true, iskakao: false })
  } else if (req.session.kakao) {
    res.render("sights5", { islogin: true, iskakao: true })
  }
  else res.render("sights5", { islogin: false, iskakao: false })
}
exports.sights6 = (req, res) => {
  if (req.session.user) {
    res.render("sights6", { islogin: true, iskakao: false })
  } else if (req.session.kakao) {
    res.render("sights6", { islogin: true, iskakao: true })
  }
  else res.render("sights6", { islogin: false, iskakao: false })
}
exports.worldCup = (req, res) => {
  if (req.session.user) {
    res.render("worldCup", { islogin: true, iskakao: false })
  } else if (req.session.kakao) {
    res.render("worldCup", { islogin: true, iskakao: true })
  }
  else res.render("worldCup", { islogin: false, iskakao: false })
}
exports.chat = (req, res) => {
  res.render("chat")
}
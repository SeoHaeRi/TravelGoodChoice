const Models  = require('../model');

exports.mypage_index = async (req, res) => {
    const [result, metadata] = await Models.sequelize.query(
        `SELECT * FROM user WHERE id = '${req.session.id}';`
    )
    console.log('result', result);
    await res.render('mypage', {data: result}); 
}

exports.user_update = (req, res) => {
    let newObj = {
        name : req.body.name, 
        password : req.body.password, 
    }
    Models.User.update( newObj, {where: {id: req.session.id}})
    .then((result) => {
        console.log(result);
        res.send('수정 성공');
    })
}
/* 닉네임 중복 확인 및 변경 */
exports.isName = (req, res) => {
    Models.User.findOne( {
        where: {name: req.body.name}
    })
    .then((result) => {
        console.log(result)
        if (result == null) { // id가 없어서 가져온 데이터가 없으면
            return res.send(true); // 사용 가능
        } else {
            return res.send(false); // 사용 불가능
        }
    })
  }
  
  
  /* 비밀 번호 중복 확인 및 변경 */
  exports.post_modify = (req, res) => {
    res.render('modify', {id: data.id});
  }
  
  exports.post_update = (req, res) => {
    let newObj = {
        pw : data.pw
    };
    User.update( newObj, {where: {id: data.id}})
    .then((result) => {
        res.send('비밀번호 수정 성공!');
    });
}


const { Post,sequelize, User } = require("../model");
const { Op } = require('sequelize')


exports.view_post = async (req, res) => {

        let result = await Post.findAll({attributes:{
          include:[
            "updatedAt",
            [sequelize.fn(
              "DATE_FORMAT",
              sequelize.col("updatedAt"),
              "%Y-%m-%d %H:%i:%S"
            ),
          "updatedAt"],
          
          ],
        },
      });
      if (req.session.user) {
        res.render("community", { data: result, islogin: true, iskakao: false,})
      } else if (req.session.kakao) {
        res.render("community", { data: result, islogin: true, iskakao: true, })
      }
      else res.render("community", { data: result, islogin: false, iskakao: false, })
}

exports.community = async (req, res) => {
    let data
    if (req.session.kakao && req.file) {
      data = {
        title:req.body.title,
        star:req.body.star,
        maintext:req.body.content,
        region:req.body.region,
        userid: req.session.kakao.id, 
        writer: req.session.kakao.name,
        img:req.file.filename 
      }
    } else if (req.session.user && req.file) {
      data = {
        title:req.body.title,
        star:req.body.star,
        maintext:req.body.content,
        region:req.body.region,
        userid: req.session.user.id,
        writer: req.session.user.name,
        img:req.file.filename
      }
    }
    else if (req.session.kakao ){
      data = {    
          title:req.body.title,
          star:req.body.star,
          maintext:req.body.content,      
          userid:req.session.kakao.id,
          writer: req.session.kakao.name,
          region:req.body.region,
      }
    }
      else if(req.session.user){
        data = {    
          title:req.body.title,
          star:req.body.star,
          maintext:req.body.content,      
          userid:req.session.user.id,
          writer: req.session.user.name,
          region:req.body.region, 
      }
      }
    
    await Post.create(data)
  
  let result = await Post.findOne({where:{maintext:req.body.content}})

  console.log(result)
  res.send({ data:result })

  }


exports.view_contents = async (req, res,) => {
  const post = await Post.findOne({
    where: { [Op.or]: [{ index_number: req.params.index_number }, { img: req.params.index_number }] }, attributes: {
      include: [
        "createdAt",
        [sequelize.fn(
          "DATE_FORMAT",
          sequelize.col("createdAt"),
          "%Y-%m-%d %H:%i:%S"
        ),
          "updatedAt"],
      ],
    },
  })
  if (req.session.user) {
    res.render("contents", { data: post, islogin: true, iskakao: false, user:req.session.user.id, kakao: false })
  } else if (req.session.kakao) {
    res.render("contents", { data: post, islogin: true, iskakao: true, user:false, kakao:req.session.kakao.id })
  }
  else res.render("contents", { data: post, islogin: false, iskakao: false, user:false, kakao:false })

  console.log("포스트",post)
}

exports.modify = async (req, res) => {
  let data
  if (req.file) {
    console.log("인덱넘", req.body)
    data = {
      title: req.body.title,
      star: req.body.star,
      maintext: req.body.content,
      region: req.body.region,
      img: req.file.filename
    }
  } else {
    console.log("인덱넘", req.body)
    data = {
      title: req.body.title,
      star: req.body.star,
      region: req.body.region,
      maintext: req.body.content,
    }
  }

  
  const result = await Post.update(data,{where:{index_number:req.body.index_number}})
  res.send({data:result.img})

}

exports.del_contents = async (req, res) => {
  await Post.destroy({ where: { index_number: req.body.index_number } })
  res.send(true)
}



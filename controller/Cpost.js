const { Post, sequelize } = require("../model");
const { Op } = require('sequelize');

exports.view_post = async (req, res) => {
        let result = await Post.findAll({attributes:{
          include:[
            "createdAt",
            [sequelize.fn(
              "DATE_FORMAT",
              sequelize.col("createdAt"),
              "%Y-%m-%d %H:%i:%S"
            ),
          "createdAt"],
          
          ],
        },
      });
            if ( result.length > 0 ) 
            res.render("community", {data: result, user:req.session.user, kakao:req.session.kakao});
 
            else res.render("community");   
}

exports.community = async (req, res) => {
    console.log(req.body)
    let data
  if (req.file) {
    data = {
      title:req.body.title,
      star:req.body.star,
      maintext:req.body.content,
      region:req.body.region,
      writer:req.session.user || req.session.kakao,
      img:req.file.filename

    }
  } else {
    console.log("바디",req.body)
    data = {    
        title:req.body.title,
        star:req.body.star,
        maintext:req.body.content,
        writer:req.session.user || req.session.kakao,
        region:req.body.region,
        

        
    }
  }
  await Post.create(data)
  let result = await Post.findOne({where:{maintext:req.body.content}})
  console.log(data)
  res.send({result})

}

exports.view_contents = async(req,res,) =>{
  
  const post = await Post.findOne({where: {[Op.or]: [{index_number:req.params.index_number},{img:req.params.index_number}] }, attributes:{
    include:[
      "createdAt",
      [sequelize.fn(
        "DATE_FORMAT",
        sequelize.col("createdAt"),
        "%Y-%m-%d %H:%i:%S"
      ),
    "createdAt"],
    
    ],
  }, })
  res.render("contents",{ data: post })
  console.log(post)
 
}

exports.modify = async(req,res) =>{
  let data
  if (req.file) {
    console.log("인덱넘",req.body)
    data = {
      title:req.body.title,
      star:req.body.star,
      maintext:req.body.content,
      region:req.body.region,
      img:req.file.filename
    }
  } else {
    console.log("인덱넘",req.body)
    data = {    
        title:req.body.title,
        star:req.body.star,
        region:req.body.region,
        maintext:req.body.content,
    }
  }
  
  const result = await Post.update(data,{where:{index_number:req.body.index_number}})
  res.send(result)
}

exports.del_contents = async(req,res)=>{
 await Post.destroy({where:{index_number:req.body.index_number}})
 res.send(true)
}



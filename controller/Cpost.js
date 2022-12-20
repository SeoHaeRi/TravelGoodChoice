const { Post, sequelize } = require("../model");

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
            if ( result.length > 0 ) res.render("community", {data: result, user:req.session.user});
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
      writer:req.session.user,
      img:req.file.filename

    }
  } else {
    console.log("바디",req.body)
    data = {    
        title:req.body.title,
        star:req.body.star,
        maintext:req.body.content,
        writer:req.session.user,
        region:req.body.region,
        

        
    }
  }
  await Post.create(data)
  let result = await Post.findOne({where:{maintext:req.body.content}})
  console.log(data)
  res.send({result})

}


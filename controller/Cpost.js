const { Post } = require("../model");

exports.view_post = async (req, res) => {
        let result = await Post.findAll()
            if ( result.length > 0 ) res.render("community", {data: result});
            else res.send("오류가 발생하였습니다.");   
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
      writer:req.body.writer,
      img:req.file.filename

    }
  } else {
    console.log("바디",req.body)
    data = {    
        title:req.body.title,
        star:req.body.star,
        maintext:req.body.content,
        writer:req.body.writer,
        region:req.body.region,
        //writer:req.session.user,

        
    }
  }
  await Post.create(data)
  console.log(data)
  res.send(data)

}


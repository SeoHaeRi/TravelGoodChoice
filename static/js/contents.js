
function commentOn(){
    var dd = document.getElementsByClassName('sial')[0];
    // 인덱스 처리

    var form = document.getElementById("comment-form")
    var content = document.getElementById("comment-box");
    

    var comments = document.getElementsByClassName("comments");

    var div1 = document.createElement("div") ;
    div1.classList = "first-comment";

    
    var img = document.createElement("img");    
    img.classList = "comment-img";
    img.src = "/static/upload_img/1.jpg";
   
    
    var a = document.createElement("a");
    a.classList = "comment-name";
    a.innerText = "김철수";
    
    var span = document.createElement("span");
    span.innerText = content.value;
    console.log(span);
    
    var div2 = document.createElement("div");
    
    var div3 = document.createElement("div");
    div3.classList = "comment-form";
    
    var date = document.createElement("span");
    var dt = new Date();
    date.innerText = dt.getFullYear() + "-" + (dt.getMonth()+1) + "-" + dt.getDate()+ " " +dt.getHours() + ":" + dt.getMinutes() +":"+ dt.getSeconds();
    
    var br = document.createElement("br");
    
    var a2 = document.createElement("a");
    // a2.onclick = coComent();
    a2.innerText = "답글달기";
    
    
    div3.appendChild(date);
    div3.appendChild(br);
    div3.appendChild(a2);
    
    div2.appendChild(div3);
    
    div1.appendChild(img);
    div1.appendChild(a);
    div1.appendChild(span);
    div1.appendChild(div2);
    
    document.body.append(div1);
    // comments.appendChild(div1);
    console.log(div1);
}
    
        // ----------------------창 닫힌 후 값 초기화 ---------------------------------
    
    // var star = document.getElementsByClassName("star");

    // title.value= "";
    // content.value= "";
    // file.value= "";
    // $("input:radio[name='star']:checked").prop("checked", false);
    // region.value = "";

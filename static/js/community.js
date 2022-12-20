
const { reset } = require("nodemon");

function writeOn(){

    var form = document.getElementById("community-form")
    const formData = new FormData();
    const file = document.getElementById("file")
    formData.append('title', form.title.value)
    formData.append('star', form.star.value)
    formData.append('content', form.content.value)
    formData.append('region', form.region.value)
    formData.append('writer', form.writer.value)
    formData.append('community_file', file.files[0]);
    axios({
        method: "post",
        url: "/post/community",
        data: formData
    })
    .then((response)=>{
        console.log(response)
        var title = document.getElementById("title");
        var content = document.getElementById("content");
        var region = document.getElementById("region");
        var star1 = document.querySelector('input[name="star"]:checked').id;
    
        if (!title.value )
        alert("제목을 적어주세요.")
        else if (content.value == "내용을 입력해주세요." || !content.value )
        alert("내용을 적어주세요.")
        else {
        var table = document.getElementById("table");
        var tr = document.createElement("tr");
    
        var no = document.createElement("td");
        no.innerText = cnt;
        cnt = response.data.value
        //cnt = cnt + 1;
    
        var title1 = document.createElement("td");
        title1.innerHTML  = response.data.title
        //title1.innerHTML = '<a href="http://localhost:8000/" class="list">'+ title.value + "</a>";
        // title1.innerText = title.value;
    
        var star = document.createElement("td");
        console.log(star1);
      
            
        star.innerText =  response.data.star
        //star.innerText = star1;
    
        var region1 = document.createElement("td");
        region1.innerHTML =  response.data.region
        //region1.innerHTML = region.value;
    
        var id = document.createElement("td");
       id.innerHTML= response.data.writer
        // title.innerText = id;
    
        var date = document.createElement("td");
        var dt = new Date();
        console.log( dt );
        
        //date.innerHTML = response.data.createdAT
        date.innerText = dt.getFullYear() + "-" + (dt.getMonth()+1) + "-" + dt.getDate();
    
        tr.appendChild(no);
        tr.appendChild(title1);
        tr.appendChild(star);
        tr.appendChild(region1);
        tr.appendChild(id);
        tr.appendChild(date);
        table.appendChild(tr);
    
        // ----------------------창 닫힌 후 값 초기화 ---------------------------------
    
    var star = document.getElementsByClassName("star");

    title.value= "";
    content.value= "";
    file.value= "";
    $("input:radio[name='star']:checked").prop("checked", false);
    region.value = "";

    }
    
}
)}

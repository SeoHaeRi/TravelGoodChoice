var cnt = 1;
function writeOn(){

    var title = document.getElementById("title");
    var content = document.getElementById("content");
    var star1 = document.querySelector('input[name="star"]:checked').value;

    if (!title.value )
    alert("제목을 적어주세요.")
    else if (content.value == "내용을 입력해주세요." || !content.value )
    alert("내용을 적어주세요.")
    else {
    var table = document.getElementById("table");
    var tr = document.createElement("tr");

    var no = document.createElement("td");
    no.innerText = cnt;
    cnt = cnt + 1;

    var title1 = document.createElement("td");
    title1.innerHTML = '<a href="http://localhost:8000/" class="list">'+ title.value + "</a>"
    // title1.innerText = title.value;

    var star = document.createElement("td");
    console.log(star1);
    star.innerText = star1;

    var id = document.createElement("td");
    // title.innerText = id;

    var date = document.createElement("td");
    var dt = new Date();
    console.log( dt );
    
    date.innerText = dt.getFullYear() + "-" + (dt.getMonth()+1) + "-" + dt.getDate();

    var view = document.createElement("td");
    view.innerText = "없음"

    tr.appendChild(no);
    tr.appendChild(title1);
    tr.appendChild(star);
    tr.appendChild(id);
    tr.appendChild(date);
    tr.appendChild(view);
    table.appendChild(tr);

    // ----------------------창 닫힌 후 값 초기화 ---------------------------------

    var title = document.getElementById("title");
    var content = document.getElementById("content");
    var file = document.getElementById("file");

    title.value= "";
    content.value= "";
    file.value= "";

    }
    
}
function cancleOn() {
    var title = document.getElementById("title");
    var content = document.getElementById("content");
    var file = document.getElementById("file");

    title.value= "";
    content.value= "";
    file.value= "";
}
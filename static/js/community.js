function writeOn(){

    var title = document.getElementById("title");
    var content = document.getElementById("content");

    console.log(title.value);
    if (!title.value )
    alert("제목을 적어주세요.")
    else if (content.value == "내용을 입력해주세요." || !content.value )
    alert("내용을 적어주세요.")
    return;

    var table = document.getElementById("table");
    var tr = document.getElementById("tr");

    
}
function cancleOn() {
    var title = document.getElementById("title");
    var content = document.getElementById("content");

    title.value= "";
    content.value= "";
}
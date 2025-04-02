var count=1;
function addFunction(){
    var btn = document.createElement("Button");
    btn.innerHTML=`Click Me(${count})`;
    btn.setAttribute("id","btn_"+count++);
    btn.setAttribute("class","btn btn-outline-danger");
    console.log(btn);
    document.body.appendChild(btn);
};
function delFunction(){
    var btn = document.getElementById("btn_"+--count);
    console.log(btn);
    document.body.removeChild(btn); 
}
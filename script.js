let display=document.getElementById("display");
document.getElementById("clear").onclick=function(){
    display.value="";
};
Document.querySelectorAll(".num").forEach((button)=>{
    button.onclick=function(){
        display.value+=this.innerHTML;
    };
})
document.getElementById("delete");onclick=function(){
    display.value=display.value.slice(0,-1);
};


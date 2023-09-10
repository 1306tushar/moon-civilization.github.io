let moon=document.getElementsByClassName("moon")[0];
// let stars =document.getElementById("stars");
// let sky=document.getElementById("stars");
let cityLeft=document.getElementsByClassName("cl")[0];
let cityRight=document.getElementsByClassName("cr")[0];
let text=document.querySelector(".hero p");
window.addEventListener("scroll",()=>{
    let scrollValue=window.scrollY;
    moon.style.top=scrollValue*2+"px";
    text.style.top=scrollValue*2+"px";
    cityLeft.style.left=scrollValue*-1.2+"px";
    cityRight.style.left=scrollValue*1.2+"px";

})
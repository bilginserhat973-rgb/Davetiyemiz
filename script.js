const target = new Date("August 26, 2026 19:00:00").getTime();

setInterval(()=>{
let now = new Date().getTime();
let diff = target-now;

let d=Math.floor(diff/(1000*60*60*24));
let h=Math.floor((diff%(1000*60*60*24))/(1000*60*60));

document.getElementById("countdown").innerHTML =
d+" gün "+h+" saat kaldı";
},1000);

function share(){
navigator.share({
title:"Melike & Serhat Nişan Davetiyesi",
text:"Davetimize bekleriz 💛",
url:location.href
});
}

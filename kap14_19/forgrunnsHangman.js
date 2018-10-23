var forgrunnsDiv = document.querySelector("#forgrunnsDiv");
var lukkVinduEl= document.querySelector("#lukkVindu");
var bodyEl = document.querySelector("body");
lukkVinduEl.addEventListener("click", lukkVinduFunk);

forgrunnsDiv.style.height =window.innerHeight +"px";
forgrunnsDiv.style.width= window.innerWidth +"px";

function lukkVinduFunk(){
  forgrunnsDiv.style.display = "none";
}

var forgrunnsCanvas = document.querySelector("#forgrunnsCanvas");
forgrunnsCanvas.style.top = (window.innerHeight-330)/2 +"px";
forgrunnsCanvas.style.left = (window.innerWidth-600)/2 +"px";
lukkVinduEl.style.top = (window.innerHeight-330-100)/2 +"px";
lukkVinduEl.style.left = (window.innerWidth-600)/2 +"px";
var ctx1 = forgrunnsCanvas.getContext("2d");

function tegnForgrunn(){
  ctx1.beginPath();
  ctx1.moveTo(100, 320);
  ctx1.lineTo(100, 300);
  ctx1.lineTo(500, 300);
  ctx1.lineTo(500, 320);
  ctx1.moveTo(150, 300);
  ctx1.lineTo(150, 20);
  ctx1.lineTo(300, 20);
  ctx1.lineTo(300, 50);
  ctx1.lineWidth=4;
  ctx1.stroke();
  ctx1.beginPath();
  ctx1.arc(300, 75, 25, 0, 2*Math.PI);
  ctx1.stroke();
  ctx1.closePath();
  ctx1.beginPath();
  ctx1.moveTo(300, 100);
  ctx1.lineTo(300, 150);
  ctx1.stroke();
  ctx1.closePath();
  ctx1.beginPath();
  ctx1.moveTo(270, 150);
  ctx1.lineTo(300, 110);
  ctx1.stroke();
  ctx1.closePath();
  ctx1.beginPath();
  ctx1.moveTo(330, 150);
  ctx1.lineTo(300, 110);
  ctx1.stroke();
  ctx1.closePath();
  ctx1.beginPath();
  ctx1.moveTo(270, 200);
  ctx1.lineTo(300, 150);
  ctx1.stroke();
  ctx1.closePath();
  ctx1.beginPath();
  ctx1.moveTo(330, 200);
  ctx1.lineTo(300, 150);
  ctx1.stroke();
  ctx1.closePath();
}
tegnForgrunn();

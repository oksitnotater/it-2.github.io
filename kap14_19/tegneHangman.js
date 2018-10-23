var canvas = document.querySelector("#mittCanvas");
var ctx = canvas.getContext("2d");

function tegnGalge(){
	ctx.beginPath();
	ctx.moveTo(100, 320);
	ctx.lineTo(100, 300);
	ctx.lineTo(500, 300);
	ctx.lineTo(500, 320);
	ctx.moveTo(150, 300);
	ctx.lineTo(150, 20);
	ctx.lineTo(300, 20);
	ctx.lineTo(300, 50);
	ctx.lineWidth=4;
	ctx.stroke();
}

function tegnHode(){
	ctx.beginPath();
	ctx.arc(300, 75, 25, 0, 2*Math.PI);
	ctx.stroke();
	ctx.closePath();
}

function tegnMage(){
	ctx.beginPath();
	ctx.moveTo(300, 100);
	ctx.lineTo(300, 150);
	ctx.stroke();
	ctx.closePath();
}

function tegnVArm(){
	ctx.beginPath();
	ctx.moveTo(270, 150);
	ctx.lineTo(300, 110);
	ctx.stroke();
	ctx.closePath();
}

function tegnHArm(){
	ctx.beginPath();
	ctx.moveTo(330, 150);
	ctx.lineTo(300, 110);
	ctx.stroke();
	ctx.closePath();
}

function tegnVBein(){
	ctx.beginPath();
	ctx.moveTo(270, 200);
	ctx.lineTo(300, 150);
	ctx.stroke();
	ctx.closePath();
}

function tegnHBein(){
	ctx.beginPath();
	ctx.moveTo(330, 200);
	ctx.lineTo(300, 150);
	ctx.stroke();
	ctx.closePath();
}
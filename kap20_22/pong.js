// henter ut canvaset
var canvas = document.querySelector ("#canvas");
var ctx = canvas.getContext ("2d");

// henter ut poengfelt
var pSpiller1 = document.querySelector("#pSpiller1");
var pSpiller2 = document.querySelector("#pSpiller2");
// oppretter poengtellere
// spiller 1 får poeng når ballen går ut til venstre, spiller 2 ut til høyre
var poeng1 = 0;
var poeng2 = 0;	

// oppretter klasse for spillere
class Spiller {
	constructor (xPos, yPos, bredde, hoyde, yHast, farge ) {
		this.xPos = xPos;
		this.yPos = yPos;
		this.bredde = bredde;
		this.hoyde = hoyde;
		this.yHast = yHast; // skal kun beveges i y-retning
		this.farge = farge;
	}
	tegn() {
		ctx.fillStyle = this.farge;
		ctx.fillRect (this.xPos, this.yPos, this.bredde , this.hoyde);
	}
	flytt(){
		// jeg legger opp- og ned-taster utenfor denne metoden for at spillet skal lægge mindre
		this.yPos += this.yHast;
		// stopper rackerten i topp og bunn
		if(this.yPos <= 0){
			this.yHast = 0;
		}
		if(this.yPos + this.hoyde >= canvas.height){
			this.yHast = 0;
		}
	}
}

// oppretter klasse for ball
class Ball {
	constructor (xPos, yPos, radius, xHast, yHast, farge) {
		this.xPos = xPos;
		this.yPos = yPos;
		this.radius = radius;
		this.xHast = xHast;
		this.yHast = yHast;
		this.farge = farge;
	}
	tegn() {
		ctx. beginPath ();
		ctx.arc(this.xPos, this.yPos, this.radius, 2*Math.PI, 0);
		ctx.fillStyle = this.farge;
		ctx.fill ();
	}
	// flyttingen er avhengig av hvilken spiller som treffer den og hvilken retning rackerten har
	flytt(obj1, obj2) {
		this.xPos += this.xHast;
		this.yPos += this.yHast;
		var topp = this.yPos - this.radius;
		var bunn = this.yPos + this.radius;
		var venstre = this.xPos - this.radius;
		var hoyre = this.xPos + this.radius;
		// ballen treffer topp/bunn
		if(topp<0 || bunn>canvas.height ) {
			this.yHast = -this.yHast;
		}
		// ballen treffer sidevegger: skal flyttes til midten
		if(venstre<0 || hoyre>canvas.width) {
			this.xPos = canvas.width/2;
			this.yPos = canvas.height/2;
		}
		// ballen treffer en av spillerne
		if(hoyre>obj1.xPos && topp<obj1.yPos+obj1.hoyde && bunn>obj1.yPos) {
			this.xHast = -this.xHast;
			this.yHast = obj1.yHast;
		}
		if(venstre<obj2.xPos+obj2.bredde && topp<obj2.yPos+obj2.hoyde && bunn>obj2.yPos) {
			this.xHast = -this.xHast;
			this.yHast = obj2.yHast;
		}
	}
}

// legger til objektene spiller 1 og spiller 2
var spiller1 = new Spiller(530, 130, 20, 100, 0, "white");
var spiller2 = new Spiller(50, 130, 20, 100, 0, "white");

// oppretter hendelsesstyrte funksjoner for pil opp (38), pil ned (40) (spiller1) og w (87), s (83) (spiller2)
document.addEventListener("keydown", trykk);
function trykk(e){
	var tast = e.keyCode;
	if(tast == 38){ // spiller 1 opp
		spiller1.yHast = -2.5;
	}
	if(tast == 40){ // spiller 1 ned
		spiller1.yHast = 2.5;
	}
	if(tast == 87){ // spiller 2 opp
		spiller2.yHast = -2.5;
	}
	if(tast == 83){ // spiller 2 ned
		spiller2.yHast = 2.5;
	}
}
// hendelsesstyrte funksjoner som stopper yHast når knappen slippes
document.addEventListener("keyup", slipp);
function slipp(e){
	var tast = e.keyCode;
	if(tast == 38 || tast == 40){ // spiller 1 slipper
		spiller1.yHast = 0;
	}
	if(tast == 87 || tast == 83 ){ // spiller 2 slipper
		spiller2.yHast = 0;
	}
}

// legger til objektet ball
var ball = new Ball (canvas.width/2, canvas.height/2, 10, 5, 0, "white");

// teller poeng
function tell(obj){
	var venstre = obj.xPos - obj.radius;
	var hoyre = obj.xPos + obj.radius;
	if(venstre<=0) {
		poeng1+=1;
	}
	if(hoyre>=canvas.width-0) {
		poeng2+=1;
	}
	pSpiller2.innerHTML="poeng spiller 2:" + poeng2;
	pSpiller1.innerHTML="poeng spiller 1:" + poeng1;
}
// kjører animasjon av spillet
function spillPong(){
	ctx.clearRect (0, 0, canvas.width , canvas.height);
	spiller1.flytt();
	spiller1.tegn();
	spiller2.flytt();
	spiller2.tegn();
	ball.flytt(spiller1, spiller2);
	ball.tegn();
	tell(ball);
	requestAnimationFrame(spillPong);
}
requestAnimationFrame(spillPong);

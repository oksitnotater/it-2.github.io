// lager skjemaet ved hjelp av en løkke
var skjemaEl = document.querySelector("#skjema");
var info = [{akt: "sove", verdi:8, sektor: 0}, {akt: "spise", verdi: 2, sektor: 0}, {akt: "skole", verdi: 9, sektor: 0}, {akt: "trene", verdi: 2, sektor: 0}, {akt: "andre", verdi: 3, sektor: 0}];

for(var i = 0; i < info.length; i++){
	var pEl = document.createElement("p");
	pEl.innerHTML = info[i].akt + " ";
	var inputEl = document.createElement("input");
	inputEl.type ="number";
	inputEl.name = info[i].akt;
	inputEl.min = "0",
	inputEl.value = info[i].verdi;
	pEl.appendChild(inputEl);
	skjemaEl.appendChild(pEl);
}

var knappEl = document.createElement("button");
knappEl.id="send";
knappEl.innerHTML = "send svar"
skjemaEl.appendChild(knappEl)

// henter inn elementer og datainput
var sendEl = document.querySelector("#send");
sendEl.addEventListener("click", lagDiagram);
var tilbakemeldingEl = document.querySelector("#tilbakemelding");

// funksjonen når knappen klikkes
function lagDiagram(){
	var aktiviteter = document.querySelectorAll("input");
	
	// sjekker om antall timer totalt er 24
	var sumTimer = 0;
	for(var i = 0; i < aktiviteter.length; i++){
		if (aktiviteter[i].value < 0){
			tilbakemeldingEl.innerHTML = "du kan ikke sette et negativt antall timer!";
		}
		sumTimer += Number(aktiviteter[i].value);
	}
	if (sumTimer != 24){
		tilbakemeldingEl.innerHTML = "du må fylle hele døgnet, og ikke noe mer enn det!";
	}

	// oppdaterer sektorelementet til å inneholde fornuftig info
	for (var i = 0; i < info.length; i++){
		info[i].sektor = info[i].verdi*2*Math.PI/sumTimer;
	} 

	// henter inn canvaset og plotter
	var canvas=document.querySelector("#canvas1");
	var ctx1=canvas1.getContext("2d");

	var cX = canvas1.width/3;
	var cY = canvas1.height/2;
	var radius = 150;

	var forrigeSlutt = 0; 

	for (var i = 0; i < info.length; i++) {
 		var sektorSlutt = forrigeSlutt + info[i].sektor;
 		// Tegner sektoren
 		ctx1.beginPath();
	 	ctx1.arc(cX, cY, radius, forrigeSlutt, sektorSlutt);
		ctx1.lineTo(cX, cY);
 		ctx1.fillStyle = "hsl("+i*50 +" , 70%, 50%)"; 
		ctx1.fill();
		ctx1.closePath();
		// Oppdaterer variabelen forrigeSlutt
 		forrigeSlutt = sektorSlutt;
 		// Angir tekststørrelse og type for teksten og plasserer den ved siden av sektordiagrammet
 		ctx1.font = "24px 'Century Gothic'";
 		ctx1.textBaseline = "hanging";
 		var tekstStartX = canvas1.width / 1.5;
 		var tekstStartY = (canvas1.height / 2) - (30 * (info.length / 2)) + (30 * i);
 		ctx1.fillText(info[i].akt + "(" + info[i].verdi + ")", tekstStartX, tekstStartY); 
	}
}
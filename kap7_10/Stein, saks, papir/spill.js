/* i koden har jeg lagt til noen console.log for å sjekke at alt fungerer som det skal */

/*Definerer globale variabler:*/
var sumVinne=5;
var poengS=0;
var poengM=0;
var valgS;
var valgM;
var i=0;

/*Henter ut idene til poengtellere og rundetellere*/
var poengSpillerEl =document.querySelector("#poengSpiller");
var poengMotstanderEl =document.querySelector("#poengMotstander");
var rundeTellerEl =document.querySelector("#rundeTeller");
var vinnerEl=document.querySelector("#vinner");

/*Hendelse når bildet velges*/
var steinEl = document.querySelector("#stein");
var saksEl = document.querySelector("#saks");
var papirEl = document.querySelector("#papir");
var motstanderEl = document.querySelector("#motstander");
steinEl.addEventListener("click", spillFunksjon);
saksEl.addEventListener("click", spillFunksjon);
papirEl.addEventListener("click", spillFunksjon);

/*Hendelsesstyrt funksjon som kjøres når bilde velges*/
function spillFunksjon(e){
	/*spillerens valg*/
	valgS=e.target.id; /*sjekker hvilket bilde som ble valgt*/
	console.log ("Spiller valgte: " + valgS);
	if (valgS=="stein"){
		valgS=0;
	}
	else if (valgS=="saks"){
		valgS=1;
	}
	else if(valgS=="papir"){
		valgS=2;
	}
	console.log ("Spiller valgte: " + valgS);

	/*maskinens valg*/
	valgM=Math.floor(Math.random()*3) /*tilfeldig tall mellom 0 og 2*/
	console.log("Maskinen valgte: " + valgM);
	/*setter inn rett bilde*/
	if (valgM==0){
		motstanderEl.src="media/maskin_stein.png";
	}
	else if (valgM==1){
		motstanderEl.src="media/maskin_saks.png";
	}
	else if (valgM==2){
		motstanderEl.src="media/maskin_papir.png";
	}

	/*spillet: sjekker vinner*/
	if(valgS==valgM){
		i++
	}
	else if(valgS == 0 & valgM == 1){
		i++
		poengS++
	} 
	else if(valgS == 0 & valgM == 2){
		i++
		poengM++
	} 
	else if(valgS == 1 & valgM == 0){
		i++
		poengM++
	} 
	else if(valgS == 1 & valgM == 2){
		i++
		poengS++
	} 
	else if(valgS == 2 & valgM == 0){
		i++
		poengS++
	} 
	else if(valgS == 2 & valgM == 1){
		i++
		poengM++
	} 
	console.log("runder: "+i);
	console.log("spiller: "+poengS);
	console.log("motstander: "+poengM);
	/*oppdaterer */
	rundeTellerEl.innerHTML=i;
	poengSpillerEl.innerHTML=poengS;
	poengMotstanderEl.innerHTML=poengM;

	/* Funksjonen kan kjøres så lenge poengS<5 eller poengM<5*/
	if(poengS >=sumVinne || poengM>=sumVinne){
		steinEl.removeEventListener("click", spillFunksjon);
		saksEl.removeEventListener("click", spillFunksjon);
		papirEl.removeEventListener("click", spillFunksjon);
		steinEl.style.cursor = "auto";
		saksEl.style.cursor = "auto";
		papirEl.style.cursor = "auto";
		if(poengS>=5){
			vinnerEl.innerHTML="Du vant! Gratulerer! Last siden på nytt for å starte et nytt spill.";
		}
		else if(poengM>=5){
			vinnerEl.innerHTML="Maskinen vant. Last siden på nytt for å starte et nytt spill.";
		}
	}
}


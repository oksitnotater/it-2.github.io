// Henter inn tekstfeltet, de fem p-elementene som gir tilbakemelding og knappen
var tekstfeltEl = document.querySelector("#bokstav");
var sjanserIgjenEl = document.querySelector("#sjanserIgjen");
var riktigeBokstaverEl = document.querySelector("#riktigeBokstaver");
var brukteBokstaverEl = document.querySelector("#brukteBokstaver");
var tilbakemeldingEl = document.querySelector("#tilbakemelding");
var bokstavEl = document.querySelector("#bokstav");
var knappEl = document.querySelector("#knapp");
// Kobler en hendelse til knappen
knappEl.addEventListener("click", mottaBokstav);

// Lager nødvendige variabler
var losningsord = ["REYKJAVIK", "INFORMASJONSTEKNOLOGI", "KATTA", "VEKTLØFTING", "KANINER"];
var brukteBokstaver = [];
var riktigeBokstaver = [];
var antallSjanser = 6;

// Velger et løsningsord og setter inn _ for hver bokstav i løsningsordet i riktigeBokstaver
var ord = losningsord[Math.floor(Math.random()*losningsord.length)];
for(var i = 0; i < ord.length; i++){
	riktigeBokstaver.push("_");
}
riktigeBokstaverEl.innerHTML = "Riktige bokstaver: " + riktigeBokstaver;

// Tegner opp galgen før bruker begynner å gjette
tegnGalge(); 

// Funksjon som kjører når knappen trykkes
function mottaBokstav() {
	tilbakemeldingEl.innerHTML="";
	// Henter bokstaven i tekstfeltet
	var gjettetBokstav = tekstfeltEl.value;
	// Gjør bokstaven stor (upper case)
	gjettetBokstav = gjettetBokstav.toUpperCase();

	// Sjekker at bare én bokstav er skrevet inn 
	if(gjettetBokstav.length!=1){
		tilbakemeldingEl.innerHTML="Du kan bare skrive inn en bokstav av gangen";
		// Tømmer tekstfeltet
		bokstavEl.value="";
		return;
	}
	
	// Sjekker om bokstaven allerede er gjettet
	// (indexOf returnerer -1 hvis bokstaven ikke er i arrayen)
	if (brukteBokstaver.indexOf(gjettetBokstav) === -1) {
  		// Dytter bokstaven inn i brukte bokstaver
  		brukteBokstaver.push(gjettetBokstav);
		  // Sjekker om bokstaven er i kodeordet
		if(ord.indexOf(gjettetBokstav) === -1) {
    		// Ikke i kodeordet: tegn riktig kroppsdel
    		antallSjanser--;
    		console.log(antallSjanser)
			if (antallSjanser === 5) {
 				tegnHode();
			} 
			else if (antallSjanser === 4) {
  				tegnMage();
			} 
			else if (antallSjanser === 3) {
 				tegnVArm();
			} 
			else if (antallSjanser === 2) {
  				tegnHArm();
			}
			else if (antallSjanser === 1) {
  				tegnVBein();
			} 
			else if (antallSjanser === 0) {
  				tegnHBein();
  				tilbakemeldingEl.innerHTML="Du tapte!";
			}
	
  		} 
  		else {
			// Løkker gjennom kodeordet for flere mulige tilfeller av samme bokstav
    		for (var i = 0; i < ord.length; i++) {
      			// Hvis bokstav i i løsningsordet er den gjettede bokstaven
      			if(ord[i] === gjettetBokstav) {
        			// Sett inn gjettet bokstav på posisjon i (i riktigeBokstaver)  
        			riktigeBokstaver[i] = gjettetBokstav;
      			}
    		}
  		}
	} 
	else {
  		// Hvis bokstaven allerede er gjettet, gjør vi ingenting annet enn å gi beskjed, tømme feltet og avslutte funksjonen
  		tilbakemeldingEl.innerHTML="Bokstaven er allerede gjettet!";
  		bokstavEl.value="";
		return;
	}

	// Sorterer de brukte bokstavene i alfabetisk rekkefølge
	brukteBokstaver.sort();
 
	// Skriver ut informasjon om brukte bokstaver, riktige bokstaver og antall sjanser igjen
	brukteBokstaverEl.innerHTML = "Brukte bokstaver: " + brukteBokstaver;	
	riktigeBokstaverEl.innerHTML = "Riktige bokstaver: " + riktigeBokstaver;	
	sjanserIgjenEl.innerHTML = "Antall sjanser igjen: " + antallSjanser;

	// sjekker om hele løsningsordet er gjettet
	var vunnet = 1;
	for (var i = 0; i < riktigeBokstaver.length; i++){
		if(riktigeBokstaver[i] != ord[i]){
			vunnet = 0;
		}
	}
	if(vunnet == 1){
		tilbakemeldingEl.innerHTML="Du vant!";
	}

	// Tømmer tekstfeltet
	bokstavEl.value="";
}

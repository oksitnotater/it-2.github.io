// henter inn elementer fra DOM
var skjemadiv = document.querySelector("#skjema");
var prisEl = document.querySelector("#pris");

// lager arrays og objects med prisinfo og bestillinger
var reisetype = ["ferie", "utenom"];
var hotelltype = ["enkeltrom", "dobbeltrom", "familierom"];
var gjestetype = ["barn", "ungdom", "voksen"];
var ferie = {hotellpris: [800, 1100, 1900],
			heiskortpris: [250, 300, 400],
			utstyrpris: [200, 250, 350]};
var	utenom = {hotellpris: [600, 850, 1400],
			heiskortpris: [200, 250, 350],
			utstyrpris: [150, 200, 300]};
// legger ut skjema
var linjeEl = document.createElement("br")
var sesongH = document.createElement("h2");
// ferie/utenom
sesongH.innerHTML = "Når reiser dere?";
skjemadiv.appendChild(sesongH);
for(var i = 0; i < reisetype.length; i++){
	var beskrivelse = document.createElement("p");
	beskrivelse.innerHTML = reisetype[i];
	var inputEl = document.createElement("input");
	inputEl.type="radio";
	inputEl.name="reisetype";
	inputEl.id=reisetype[i];
	beskrivelse.appendChild(inputEl);
	skjemadiv.appendChild(beskrivelse)
}

// antall dager
var inputEl = document.createElement("input");
inputEl.type="number";
inputEl.id="dager";
inputEl.placeholder="Hvor mange dager?";
skjemadiv.appendChild(inputEl);

// antall rom
var romH = document.createElement("h2");
romH.innerHTML = "Hvor mange rom ønsker dere?";
skjemadiv.appendChild(romH);
for(var i = 0; i < ferie.hotellpris.length; i++){
	var inputEl = document.createElement("input");
	inputEl.type="number";
	inputEl.min=0;
	inputEl.classList.add("hotell");
	inputEl.placeholder=hotelltype[i];
	skjemadiv.appendChild(inputEl);
}

// antall heiskort
var heisH = document.createElement("h2");
heisH.innerHTML = "Hvor mange heiskort ønsker dere?";
skjemadiv.appendChild(heisH);
for(var i = 0; i < ferie.heiskortpris.length; i++){
	var inputEl = document.createElement("input");
	inputEl.type="number";
	inputEl.min=0;
	inputEl.classList.add("heis");
	inputEl.placeholder=gjestetype[i];
	skjemadiv.appendChild(inputEl);
}

// antall skiutstyr
var utstyrH = document.createElement("h2");
utstyrH.innerHTML = "Hvor mange skal leie skiutstyr?";
skjemadiv.appendChild(utstyrH);
for(var i = 0; i < ferie.utstyrpris.length; i++){
	var inputEl = document.createElement("input");
	inputEl.type="number";
	inputEl.min=0;
	inputEl.classList.add("utstyr");
	inputEl.placeholder=gjestetype[i];
	skjemadiv.appendChild(inputEl);
}

// knapp
skjemadiv.appendChild(linjeEl);
var knappEl = document.createElement("button");
knappEl.innerHTML = "Beregn pris for oppholdet";
knappEl.addEventListener("click", beregnPris);
skjemadiv.appendChild(knappEl);

// funksjonen tar inn brukerinput
function beregnPris(){
	// henter inn verdier
	var reiseInput = document.querySelectorAll("input[type='radio']");
	var dager = document.querySelector("#dager");
	var hotellInput = document.querySelectorAll(".hotell");
	var heisInput =  document.querySelectorAll(".heis");
	var utstyrInput = document.querySelectorAll(".utstyr");

	// sjekker at ferietype er valgt og at ingen verdier er negative. 
	var valgt = false;
	for(var i = 0; i < reiseInput.length; i++){
		if(reiseInput[i].checked){
			valgt = true;
		}
	}
	if(valgt == false){
		prisEl.innerHTML = "Du må velge en ferietype!";
		return;
	}
	if(dager.value<=0){
		prisEl.innerHTML = "Du må velge et positivt antall dager!";
		return;
	}
	for(var i = 0; i < hotellInput.length; i++){
		if(hotellInput[i].value < 0){
			prisEl.innerHTML = "Du kan ikke velge et negativt antall rom!"
			return;
		}
	}
	for(var i = 0; i < heisInput.length; i++){
		if(heisInput[i].value < 0){
			prisEl.innerHTML = "Du kan ikke velge et negativt antall heiskort!"
			return;
		}
	}
	for(var i = 0; i < utstyrInput.length; i++){
		if(utstyrInput[i].value < 0){
			prisEl.innerHTML = "Du kan ikke velge et negativt antall som skal leie utstyr!"
			return;
		}
	}

	// beregner totalpris for oppholdet
	if(reiseInput[0].checked){
		var reise = ferie;
	}
	else{
		var reise = utenom;
	}
	var totalpris = 0;
	for(var i = 0; i < hotellInput.length; i++){
		totalpris += Number(hotellInput[i].value)*reise.hotellpris[i];
	}
	for(var i = 0; i < heisInput.length; i++){
		totalpris += Number(heisInput[i].value)*reise.heiskortpris[i];
	}
	for(var i = 0; i < utstyrInput.length; i++){
		totalpris += Number(utstyrInput[i].value)*reise.utstyrpris[i];
	}
	totalpris = totalpris*dager.value;
	prisEl.innerHTML = "Totalprisen for oppholdet blir " + totalpris + " kroner.";
}

/* koden kan utvides til å gjelde alle skisteder ved å legge objectene inn i en ny object som inneholder skistedets navn:
var ferie = {hurrungane: {
					hotellpris: [800, 1100, 1900],
					heiskortpris: [250, 300, 400],
					utstyrpris: [200, 250, 350]};
					};
			osv.
koden kan utvides til å gi rabatt for flere dagers opphold ved å erstatte heiskortpris[i] med heiskortpris[i]*avslag der prosent representerer rabatten. (f.eks. avslag = 0.75 for 25% rabatt)

Andre forslag til utvidelser:
I stedet for å stole på at brukeren velger korrekt antall rom kan man lage et skjema som tar inn antall gjester (barn, ungdom og voksne) og bruke dette skjemaet til å bestemme valgene i selve bestillingsskjemaet:
slik at man f.eks. ikke får muligheten til å velge ett enkeltrom dersom man er fire gjester*/

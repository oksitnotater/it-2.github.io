// henter inn elementer fra DOM
var tabelldiv = document.querySelector("#tabell");
var skjemadiv = document.querySelector("#skjema");
var tilbakemeldEl = document.querySelector("#tilbakemeld");
var bildeEl = document.querySelector("#skibilde");

// lager en array med alle skibakker og egenskapene vi trenger her
var nedfarter = [
	{nedfart: "Styggebakken",
	lengde: 800,
	turer: 0},
	{nedfart: "Fartsfantomet",
	lengde: 1750,
	turer: 0},
	{nedfart: "Barnebakken",
	lengde: 500,
	turer: 0},
	{nedfart: "Topp-ned-bakken",
	lengde: 3420,
	turer: 0},
	{nedfart: "Opp-ned-parken",
	lengde: 1300,
	turer: 0},
];

// legger ut tabell med info om bakkene
var tabellEl = document.createElement("table");
var overskriftEl = document.createElement("tr");
overskriftEl.innerHTML="<th>Nedfart</th><th>Lengde i meter</th>";
tabellEl.appendChild(overskriftEl);
for(var i=0; i < nedfarter.length; i++){
	var radEl = document.createElement("tr");
	radEl.innerHTML = "<td>"+nedfarter[i].nedfart+"</td>"+"<td>"+nedfarter[i].lengde+"</td>";
	tabellEl.appendChild(radEl);
} 
tabelldiv.appendChild(tabellEl);

// legger ut skjema der man kan fylle inn antall turer
var overskriftEl = document.createElement("h1");
overskriftEl.innerHTML = "Fyll inn antall turer i hver bakke";
skjemadiv.appendChild(overskriftEl);
var linjeEl = document.createElement("br")
for(var i = 0; i < nedfarter.length; i++){
	var inputEl = document.createElement("input");
	inputEl.type="number";
	inputEl.min=0;
	inputEl.placeholder=nedfarter[i].nedfart;
	skjemadiv.appendChild(inputEl);
	skjemadiv.appendChild(linjeEl);
}
var knappEl = document.createElement("button");
knappEl.innerHTML = "Beregn nedfartslengde";
knappEl.addEventListener("click", beregnTotal);
skjemadiv.appendChild(knappEl);

// funksjonen tar inn antall turer, fyller inn i nedfarter[i].turer og beregner total lengde
function beregnTotal(){
	var total = 0;
	var turer = document.querySelectorAll("input")
	console.log(turer);
	// sjekker at ingen er negative
	for(var i = 0; i < turer.length; i++){
		if(turer[i].value<0){
			tilbakemeldEl.innerHTML = "Du må kjøre et positivt antall turer!";
			return;
		}
	}
	// fyller inn antall turer i nedfarter
	for(var i = 0; i < turer.length; i++){
		nedfarter[i].turer = Number(turer[i].value);
		total += nedfarter[i].turer*nedfarter[i].lengde/1000;
	}
	tilbakemeldEl.innerHTML = "Du har kjørt "+total.toFixed(2)+" kilometer";
	if (total <= 10) {
		bildeEl.src = "vedlegg/nybegynner.png"; //legger ved respektive bilder utifra lengde
	}
	
	else if (total>25) {
		bildeEl.src = "vedlegg/profesjonell.png";
	}

	else {
		bildeEl.src = "vedlegg/middelmaadig.png";
	}
}


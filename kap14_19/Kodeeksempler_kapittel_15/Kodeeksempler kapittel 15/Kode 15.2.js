// Henter inn tekstfeltet
var tekstfeltEl = document.querySelector("#bokstav");

// Henter inn de tre p-elementene
var sjanserIgjenEl = document.querySelector("#sjanserIgjen");
var riktigeBokstaverEl = document.querySelector("#riktigeBokstaver");
var brukteBokstaverEl = document.querySelector("#brukteBokstaver");

// Henter inn knappen
var knappEl = document.querySelector("#knapp");
// Kobler en hendelse til knappen
knappEl.addEventListener("click", mottaBokstav);

// Variabel som inneholder løsningsordet
var losningsord = "LONDON";
// Array som inneholder alle brukte bokstaver
var brukteBokstaver = [];
// Array som inneholder riktige bokstaver
var riktigeBokstaver = ["_", "_", "_", "_", "_", "_"];

// Variabel som inneholder antall sjanser spilleren skal få
var antallSjanser = 6;

// Tegner opp galgen
//tegnGalge();

// Viser antall bokstaver i løsningsordet
riktigeBokstaverEl.innerHTML = "Riktige bokstaver: " + riktigeBokstaver;

// Funksjon som kjører når knappen trykkes
function mottaBokstav() {
  console.log("Du trykket på knappen.");
}
var norge = document.querySelector("#norge");
var halling = document.querySelector("#halling");
var hurrungane = document.querySelector("#hurrungane");
var okstindan = document.querySelector("#okstindan");
var tilbake = document.querySelector("#tilbake");
var tekstEl = document.querySelector("#tekst");

halling.addEventListener("click", visHalling);
hurrungane.addEventListener("click", visHurrungane);
okstindan.addEventListener("click", visOkstindan);
tilbake.addEventListener("click", visNorge);

function visHalling(){
	norge.style.backgroundImage = "url('Vedlegg/Hallingskarvet.jpg')";
	norge.style.width = "885px";
	norge.style.backgroundSize = "885px 452px";
	tekstEl.innerHTML = "Liker du fart og spenning er dette stedet!";
}
function visHurrungane(){
	norge.style.backgroundImage = "url('Vedlegg/Hurrungane.jpg')";
	norge.style.width = "678px";
	norge.style.backgroundSize = "678px 452px";
	tekstEl.innerHTML = "Dette er løypene for de aller tøffeste!";
}
function visOkstindan(){
	norge.style.backgroundImage = "url('Vedlegg/Okstindan.jpg')";
	norge.style.width = "805px";
	norge.style.backgroundSize = "805px 452px";
	tekstEl.innerHTML = "Reis hit for å oppleve store snømengder i mørketida!";
}
function visNorge(){
	norge.style.backgroundImage = "url('Vedlegg/NorgeSkisteder.jpg')";
	norge.style.width = "400px";
	norge.style.backgroundSize = "400px 452px";
	tekstEl.innerHTML = " ";
}
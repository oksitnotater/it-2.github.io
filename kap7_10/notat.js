// lager variabler for de ulike inputelementene, knappen og bodyelementet
var tekstInputEl = document.querySelector("#tekstinput");
var tallInputEl = document.querySelector("#tallinput");
var checkInputEl1 = document.querySelector("#checkinput1");
var checkInputEl2 = document.querySelector("#checkinput2");
var checkInputEl3 = document.querySelector("#checkinput3");
var radioInputEl1 = document.querySelector("#radioinput1");
var radioInputEl2 = document.querySelector("#radioinput2");
var knappEl = document.querySelector("#knapp");
var bodyEl = document.querySelector("body");

// knappen representerer en hendelse som styrer en funksjon
knappEl.addEventListener("click", funksjon);

// funksjonen bearbeider inputdataen
function funksjon(e){
	// lagrer tekst- og tallinnhold og skriver det ut
	var tekstInnhold=tekstInputEl.value;
	var tallInnhold=tallInputEl.value;
	bodyEl.innerHTML += "<br> I tekstfeltet står det skrevet " + tekstInnhold;
	bodyEl.innerHTML += "<br> I tallfeltet står det skrevet " + tallInnhold;

	// finner ut hvilke bokser og radioknapper som er valgt
	if (checkInputEl1.checked){
		bodyEl.innerHTML += "<br> Den første boksen er huket av ";
	}
	if (checkInputEl2.checked){
		bodyEl.innerHTML += "<br> Den andre boksen er huket av ";
	}
	if (checkInputEl3.checked){
		bodyEl.innerHTML += "<br> Den tredje boksen er huket av ";
	}
	
	if (radioInputEl1.checked){
		bodyEl.innerHTML += "<br> Den første radioknappen er valgt";
	}
	else  if(radioInputEl2.checked){
		bodyEl.innerHTML += "<br> Den andre radioknappen er valgt";
	}
}
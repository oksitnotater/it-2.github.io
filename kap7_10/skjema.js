/* En funksjon som lagrer svarene fra skjemaet og sammenlikner dem */
function skjemaSvar(form){
	var navn = skjema.navn.value;
	navn=navn.toLowerCase()
	var adresse = skjema.adresse.value;
	var nummer = skjema.nummer.value;

	if (navn == "asta rønning fjærli"){
		document.write("Navnet er " + navn);
	}
	else if (navn == "asta" || navn == "rønning!" || navn == "fjærli"){
		document.write("Deler av navnet er " + navn);
	}
	else{
		document.write("Du må skrive noe")
	}
}
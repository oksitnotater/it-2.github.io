// Henter bokstaven i tekstfeltet
var gjettetBokstav = tekstfeltEl.value;
// Gjør bokstaven stor (upper case)
gjettetBokstav = gjettetBokstav.toUpperCase();
	
// Sjekker om bokstaven allerede er gjettet
// (indexOf returnerer -1 hvis bokstaven ikke er i arrayen)
if (brukteBokstaver.indexOf(gjettetBokstav) === -1) {
  // Dytter bokstaven inn i brukte bokstaver
  brukteBokstaver.push(gjettetBokstav);
	
  // Sjekker om bokstaven er i kodeordet
  if(losningsord.indexOf(gjettetBokstav) === -1) {
    // Ikke i kodeordet
    antallSjanser -= 1;
	
    // Tegn opp kroppsdel
	
  } else {
    // I kodeordet
    // Løper gjennom kodeordet for flere mulige 
    // tilfeller av samme bokstav
    for (var i = 0; i < losningsord.length; i++) {
      // Hvis bokstav i i løsningsordet er den gjettede bokstaven
      if(losningsord[i] === gjettetBokstav) {
        // Sett inn gjettet bokstav på posisjon i 
        // (i riktigeBokstaver)  
        riktigeBokstaver[i] = gjettetBokstav;
      }
    }
  }
} else {
  // Hvis bokstaven allerede er gjettet, gjør vi ingenting
  alert("Bokstaven er allerede gjettet!");
}
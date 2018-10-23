var bodyEl = document.querySelector("body");

var menyEl = document.createElement("div");
menyEl.className="col-12 row meny";

// kap 2 - 4
var kap2El = document.createElement("div");
kap2El.className="dropdown2 col-15"
var dropdown2El = document.createElement("div");
dropdown2El.className="dropbtn2";
dropdown2El.innerHTML="kapittel 2 - 4";
var dropdown2HoverEl = document.createElement("div");
dropdown2HoverEl.className="dropdown-content2";
/* legg til alle med løkke*/
var array2 = ["kap_1_3", "kap_2_1", "kap_2_2", "kap_2_3", "kap_3_1", "kap_3_1_rep", "kap_3_2", "kap_3_2_rep", "kap_4_1_2", "kap_4_1_2_rep", "kap_4_3", "kap_4_4_5","zellers_algoritme", "oppgaver", "losningsforslag"];
for(var i = 0; i < array2.length; i++){
  var lenke2El = document.createElement("a");
  lenke2El.href="../kap2_4/"+array2[i]+".html";
  lenke2El.innerHTML=array2[i];
  dropdown2HoverEl.appendChild(lenke2El);
}
dropdown2El.appendChild(dropdown2HoverEl);
kap2El.appendChild(dropdown2El);
menyEl.appendChild(kap2El);

// kap 7 - 10
var kap7El = document.createElement("div");
kap7El.className="dropdown7 col-15"
var dropdown7El = document.createElement("div");
dropdown7El.className="dropbtn7";
dropdown7El.innerHTML="kapittel 7 - 10";
var dropdown7HoverEl = document.createElement("div");
dropdown7HoverEl.className="dropdown-content7";
/* legg til alle med løkke*/
var array7 = ["kap_7_1", "kap_7_2", "kap_7_3", "kap_7_4", "kap_7_eksempel", "kap_7_eksempel_script", "repOppgaveKap7", "kap_8_1", "kap_8_1_oppg84", "kap_8_2", "kap_8_2_Ekstra", "kap_8_3", "kap_8_4","kap_10_1", "kap_10_2", "kap_10_3", "oppg10_4", "skjema", "montyHall", "montyHallEkstra", "steinSaksPapir", "oppgaver", "losningsforslag"];
for(var i = 0; i < array7.length; i++){
  var lenke7El = document.createElement("a");
  lenke7El.href="../kap7_10/"+array7[i]+".html";
  lenke7El.innerHTML=array7[i];
  dropdown7HoverEl.appendChild(lenke7El);
}
dropdown7El.appendChild(dropdown7HoverEl);
kap7El.appendChild(dropdown7El);
menyEl.appendChild(kap7El);

// kap 11-12
var kap11El = document.createElement("div");
kap11El.className="dropdown11 col-15"
var dropdown11El = document.createElement("div");
dropdown11El.className="dropbtn11";
dropdown11El.innerHTML="kapittel 11 - 12";
var dropdown11HoverEl = document.createElement("div");
dropdown11HoverEl.className="dropdown-content11";
/* legg til alle med løkke*/
var array11 = ["kap_11_1", "kap_11_2", "kap_11_2_forts", "kap_11_3", "bubblesort", "kap_12_1", "kap_12_3", "kap_12_4", "lf_oppg12_11_13", "obligatoriskFelt", "oppgaver", "losningsforslag"];
for(var i = 0; i < array11.length; i++){
  var lenke11El = document.createElement("a");
  lenke11El.href="../kap11_12/"+array11[i]+".html";
  lenke11El.innerHTML=array11[i];
  dropdown11HoverEl.appendChild(lenke11El);
}
dropdown11El.appendChild(dropdown11HoverEl);
kap11El.appendChild(dropdown11El);
menyEl.appendChild(kap11El);

// kap 14 - 19
var kap14El = document.createElement("div");
kap14El.className="dropdown14 col-15"
var dropdown14El = document.createElement("div");
dropdown14El.className="dropbtn14";
dropdown14El.innerHTML="kapittel 14 - 19";
var dropdown14HoverEl = document.createElement("div");
dropdown14HoverEl.className="dropdown-content14";
/* legg til alle med løkke*/
var array14 = ["kap_14_1_2", "kap_14_2_3_4", "kap_16_1", "kap_16_1_oppg", "kap_17_1_2", "kap_17_3", "kap_17_3b", "kap_18_1_2", "hangman_intro", "hangman", "losningTrillebar", "skjemaDiagram", "oppgaver", "losningsforslag"];
for(var i = 0; i < array14.length; i++){
  var lenke14El = document.createElement("a");
  lenke14El.href="../kap14_19/"+array14[i]+".html";
  lenke14El.innerHTML=array14[i];
  dropdown14HoverEl.appendChild(lenke14El);
}
dropdown14El.appendChild(dropdown14HoverEl);
kap14El.appendChild(dropdown14El);
menyEl.appendChild(kap14El);

// kap 20 - 22
var kap20El = document.createElement("div");
kap20El.className="dropdown20 col-15"
var dropdown20El = document.createElement("div");
dropdown20El.className="dropbtn20";
dropdown20El.innerHTML="kapittel 20 - 22";
var dropdown20HoverEl = document.createElement("div");
dropdown20HoverEl.className="dropdown-content20";
/* legg til alle med løkke*/
var array20 = ["pre_kap20", "kap_20_1_2", "kap_20_2_3", "post_kap20", "kap_21_1", "kap_21_2", "kap_21_3", "arvOppgaveBiler", "setOppgaveKalender","rep_canvas", "omPong", "pong", "oppgaver", "losningsforslag"];
for(var i = 0; i < array20.length; i++){
  var lenke20El = document.createElement("a");
  lenke20El.href="../kap20_22/"+array20[i]+".html";
  lenke20El.innerHTML=array20[i];
  dropdown20HoverEl.appendChild(lenke20El);
}
dropdown20El.appendChild(dropdown20HoverEl);
kap20El.appendChild(dropdown20El);
menyEl.appendChild(kap20El);

// eksamen
var eksamenEl = document.createElement("div");
eksamenEl.className="dropdownE col-15"
var dropdownEEl = document.createElement("div");
dropdownEEl.className="dropbtnE";
dropdownEEl.innerHTML="eksamenstrening";
var dropdownEHoverEl = document.createElement("div");
dropdownEHoverEl.className="dropdown-contentE";
/* legg til alle med løkke*/
var arrayE = ["maloppnaelse", "arbeidEksamensopppgaver", "skjemaer"];
for(var i = 0; i < arrayE.length; i++){
  var lenkeEEl = document.createElement("a");
  lenkeEEl.href="../eksamen/"+arrayE[i]+".html";
  lenkeEEl.innerHTML=arrayE[i];
  dropdownEHoverEl.appendChild(lenkeEEl);
}
dropdownEEl.appendChild(dropdownEHoverEl);
eksamenEl.appendChild(dropdownEEl);
menyEl.appendChild(eksamenEl);

// nyttig
var nyttigEl = document.createElement("div");
nyttigEl.className="dropdownN col-15"
var dropdownNEl = document.createElement("div");
dropdownNEl.className="dropbtnN";
dropdownNEl.innerHTML="nyttig tilleggsstoff";
var dropdownNHoverEl = document.createElement("div");
dropdownNHoverEl.className="dropdown-contentN";
/* legg til alle med løkke*/
var arrayN = ["lenkerLokus", "lenkerw3schools"];
for(var i = 0; i < arrayN.length; i++){
  var lenkeNEl = document.createElement("a");
  lenkeNEl.href="../nyttig/"+arrayN[i]+".html";
  lenkeNEl.innerHTML=arrayN[i];
  dropdownNHoverEl.appendChild(lenkeNEl);
}
dropdownNEl.appendChild(dropdownNHoverEl);
nyttigEl.appendChild(dropdownNEl);
menyEl.appendChild(nyttigEl);

bodyEl.appendChild(menyEl);

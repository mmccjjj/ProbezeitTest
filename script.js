let nSmile= document.getElementById("smile");
let alert= document.getElementById("text")
let bSmile= document.getElementById("smileBad")


/* funktion die die Farbe des emojis ändert und den text für eine positive Bewertung einfügt */
/* funktion so angepasst dass man zwischen positiv und negativ springen kann */

function good(){
nSmile.classList.remove("notShow");
bSmile.classList.remove("show");
nSmile.classList.add("show");
bSmile.classList.add("notShow");
nSmile.style.color= "green";
alert.innerText= ("Thank You");
alert.style.color= "green";

}
/* funktion die neutralen emoji ausblendet (füt klasse hinzu) und negativen emoji einblendet und text hinzufügt für eine negative bewertung und farbe anpasst */
/* funktion so angepasst dass man zwischen positiv und negativ springen kann */

function bad(){
nSmile.classList.remove("show");
bSmile.classList.remove("notShow");
nSmile.classList.add("notShow");
bSmile.classList.add("show");
bSmile.style.color= "red";
alert.innerText= ("Sorry!");
alert.style.color= "red";
}
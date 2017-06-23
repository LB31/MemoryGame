var bildaz = new Array("null", "eins", "zwei", "drei", "vier");
bildaz.push("fuenf", "sechs", "sieben", "acht", "neun");
bildaz.push("null", "eins", "zwei", "drei", "vier");
bildaz.push("fuenf", "sechs", "sieben", "acht", "neun");

var erstKlick = true;
var alteId = 20;
var neueId = 20;
var altesBild ="";
var neuesBild ="";
var versuche = 0;
var treffer = false;
var doppelKlick = false; 
var ausschnitt;
var stelle1;
var gewinnansage = 0;


$(document).ready(function() {

/*
$("body").html("<div class='memory' id='background'><div class='zentrierer'></div></div>");
$(".zentrierer").append("<div class='card' id='card1'></div>");
$(".zentrierer").append("<div class='card' id='card2'></div>");
$(".zentrierer").append("<div class='card' id='card1'></div>");
$(".zentrierer").append("<div class='card' id='card2'></div>");
$(".zentrierer").append("<div class='card' id='card2'></div></br>");

$(".zentrierer").append("<div class='card' id='card1'></div>");
$(".zentrierer").append("<div class='card' id='card2'></div>");
$(".zentrierer").append("<div class='card' id='card1'></div>");
$(".zentrierer").append("<div class='card' id='card2'></div>");
$(".zentrierer").append("<div class='card' id='card2'></div></br>");

$(".zentrierer").append("<div class='card' id='card1'></div>");
$(".zentrierer").append("<div class='card' id='card2'></div>");
$(".zentrierer").append("<div class='card' id='card1'></div>");
$(".zentrierer").append("<div class='card' id='card2'></div>");
$(".zentrierer").append("<div class='card' id='card2'></div></br>");

$(".zentrierer").append("<div class='card' id='card1'></div>");
$(".zentrierer").append("<div class='card' id='card2'></div>");
$(".zentrierer").append("<div class='card' id='card1'></div>");
$(".zentrierer").append("<div class='card' id='card2'></div>");
$(".zentrierer").append("<div class='card' id='card2'></div></br>");
*/


for (var i = 0 ; i <= 19 ; i++){
var zufall = parseInt(Math.random() * bildaz.length);
/*
var bild = "bilder/" + bildaz[zufall] + ".png";
$("#card" +i).find("img").attr('src', bild);
*/
$("#" +i).html("<img src='bilder/"+bildaz[zufall]+".png' class='blume'>");
bildaz.splice(zufall, 1); // Zahl nach dem Komma gibt an, wie viele Stellen im Array gelöscht werden sollen






}

		$(".blume").hide();
		
		$(".card").click(function() {
		$(this).find("img").fadeIn();
		neueId = $(this).attr("id");
		neuesBild = $(this).find("img").attr("src");

		stelle = neuesBild.indexOf('.');
		neuesBild = neuesBild.slice(7, stelle);
	
		treffer = neuesBild == altesBild;
		doppelKlick = neueId == alteId;



		
		if (erstKlick){
		erstKlick = false;
		versuche++;
		altesBild = neuesBild;
		alteId = neueId;
		$("#versuch").text(versuche);
		}
		else if(treffer && !doppelKlick){
		$("#" + alteId).unbind("click");
		$("#" + neueId).unbind("click");
		erstKlick = true;
		gewinnansage++
		if(gewinnansage == 10){
		alert("Super, du hast gewonnen!");
		}
		}
		else{
		setTimeout(function(){
		$("#" + alteId).find("img").hide();
		$("#" + neueId).find("img").hide();
		altesBild = "";
		alteId = 20;
		erstKlick = true;
		}, 600);
		}
		
		
		});

	
	
	
	
	
	
	
	
}); // Ready
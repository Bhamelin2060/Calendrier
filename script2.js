//Code JS
// Create constants here
// =====================================
// recherche de la date du jour actuel


let Tabmois = ["Janvier", "Février", "Mars", "Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"];
let Nbjour_mois=[31, 28, 31, 30,31,30,31,31,30,31,30,31];
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');       // Date actuelle
var mm = String(today.getMonth() + 1).padStart(2, '0'); //Mois actuel January is 0!
var yyyy = today.getFullYear();                         // Année actuelle
// autre manière de récupérer la date actuelle

//================= Initialise l'alarme  ================================ 
const sonnerie=document.getElementById("sonnerie");
sonnerie.innertext="alarme"; 
const Alarm= document.getElementById("alarme");
console.log(Alarm);
  Alarm.addEventListener("change",(e)=>{
  H_Alarme=Alarm.value;
  Alarm.style.backgroundColor="#ffffff";
 sonnerie.innerText= " ";
sonnerie.style.opacity=1;
//console.log("alarme est:"+ H_Alarme)
})
//================= Initialise l'alarme 1================================ 
const sonnerie1=document.getElementById("sonnerie1");
sonnerie1.innertext="alarme1"; 
const Alarm1= document.getElementById("alarme1");
console.log(Alarm1);
  Alarm1.addEventListener("change",(e)=>{
  H_Alarme1=Alarm1.value;
  Alarm1.style.backgroundColor="#ffffff";
 sonnerie1.innerText= " ";
 sonnerie1.style.opacity=1;
//console.log("alarme est:"+ H_Alarme1)
})


 
//================= Affiche la date actuelle ================================
setInterval(myTimer, 1000); // défini un interval de temps pour rafraichir la fonction myTimer toute les 1000 ms
function myTimer() {
  let mois=Tabmois[parseInt(mm-1)];         // parseInt transforme un objet texte en valeur numérique et recherche dans la table le mois en lettres
  var aujourdhui = dd+" "+ mois +" "+yyyy;  // date du jour au format jj/mois/année
  // met a jour la date actuelle
  Date_du_jour.innerText=`${aujourdhui}`;
//================= Affiche l'heure actuelle ================================
// affiche l'heure courante toute les secondes:

	const date = new Date();
	document.getElementById("HeureActuelle").innerHTML = date.toLocaleTimeString();
	var hh=  date.getHours();       // heure actuelle
	var mn= date.getMinutes();       // minuteactuelle
	var ss= date.getSeconds();       // minuteactuelle 
	console.log("l'heure est:"+hh +"minute:"+ mn+"seconde:"+ ss);
// ----------------------------test Alarm ----------------------------
var H_Alarme=Alarm.value;
	//console.log("alarme hh est:"+ H_Alarme.substring(0,2) );
	var H_alarm_hh=parseInt(H_Alarme.substring(0,2))
	//console.log("alarme mn est:"+  H_Alarme.substring(5,2) );
	var H_alarm_mn=parseInt(H_Alarme.substring(5,2));
	console.log("heure_dec="+ H_alarm_hh +" minute_dec="+ H_alarm_mn);
	console.log(H_Alarme==parseInt(hh) +":"+ parseInt( H_Alarme.substring(5,2)));
	if (hh==parseInt(H_Alarme.substring(0,2)) && mn==parseInt(H_Alarme.substring(5,3))){
		sonnerie.style.backgroundColor="RGB(100,241,39)"; // VERT
	Alarm.style.backgroundColor="RGB(100,241,39)"; // VERT  
// ---------------------------fin test Alarm----------------------
}
// ----------------------------test Alarm1 ----------------------------
var H_Alarme1=Alarm1.value;
console.log("alarme hh est:"+ H_Alarme1.substring(0,2) );
var H_alarm1_hh=parseInt(H_Alarme1.substring(0,2))
console.log("alarme1 mn est:"+  H_Alarme1.substring(5,2) );
var H_alarm1_mn=parseInt(H_Alarme1.substring(5,2));
console.log("heure_dec="+ H_alarm1_hh +" minute_dec="+ H_alarm1_mn);
console.log(H_Alarme1==parseInt(hh) +":"+ parseInt( H_Alarme1.substring(5,2)));
if (hh==parseInt(H_Alarme1.substring(0,2)) && mn==parseInt(H_Alarme1.substring(5,3))){
sonnerie1.style.backgroundColor="RGB(100,241,39)"; // VERT
Alarm1.style.backgroundColor="RGB(100,241,39)"; // VERT 
// ----------------------------fin test Alarm1--------------------------------
}




}  // fin interval de scrutation

//========================================================
//extraction fete du jour


//========================================================

// Déclaration des variables pour calcul de l'age
const hoursPerDay =24;
const minutesPerHour=60;
const secondsPerMinute=60;

//=========================================

// =====================================

const dayInput = document.querySelector('#Nbday-input');
const calculateButton = document.querySelector('#calculate-button');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const Sonnerie=document.querySelector('#sonnerie');
var Date_du_Jour = document.querySelector('#Date_du_jour');
var HeureActuelle=document.querySelector('#HeureActuelle');
let Anniversaire=document.getElementById("anni")
const ResetAlarm = document.querySelector('#BoutonS');  // bouton reset alarm 
const ResetAlarm1 = document.querySelector('#BoutonS1');// bouton reset alarm1
// --------------------evénement arret alarm -----------------
ResetAlarm.addEventListener('click', () => {
Alarm.value="--:--";
sonnerie.style.opacity=0 
sonnerie.value= "";
sonnerie.style.backgroundColor="RGB(255,255,255)"; // blanc
Alarm.style.background="RGB(255,255,255)";
});
//  ------------------- fin reset Alarm----------------------- 

// --------------------evénement arret alarm1 -----------------
ResetAlarm1.addEventListener('click', () => {
Alarm1.value="--:--";
sonnerie1.style.opacity=0 
sonnerie1.value= "";
sonnerie1.style.backgroundColor="RGB(255,255,255)"; // blanc
Alarm1.style.background="RGB(255,255,255)";
});
//  ------------------- fin reset Alarm----------------------
// test un mouvement de souris
document.addEventListener('mousemove', function(event) {
  const posx = event.pageX; // Coordonnée X de la souris dans la page ( body)
  const posy = event.pageY; // Coordonnée Y de la souris dans la page ( body)
  Mouse_x.innerText=`Position de la souris en X: ${posx}` 
  Mouse_y.innerText=`Position de la souris en Y: ${posy}` ;
});
//------------------ fin d'event avec la souris ------------------------------------

calculateButton.addEventListener('click', () => {
  let days = dayInput.value;
  let calcHours = days * hoursPerDay;
  let calcMinutes = calcHours * minutesPerHour;
  let calcSeconds = calcMinutes * secondsPerMinute;
  
  hours.innerText = `${calcHours} hours`;
  minutes.innerText = `${calcMinutes} minutes`;
  seconds.innerText = `${calcSeconds} seconds`;
  
});

const calculateButton2 = document.querySelector('#calculate-button2');
// calcul de l'age ////////////////////////////
calculateButton2.addEventListener('click', () => {
  const année_nais_input = document.querySelector('#Année-input');
  const mois_nais_input = document.querySelector('#Mois_input');
  const jour_nais_input = document.querySelector('#Jour-input');
 // console.log(document.getElementById("Année-input").placeholder).innerText;
  document.getElementById("Année-input").placeholder=`${yyyy}`;
  //document.getElementById('env').placeholder = 'Environnement';
 Anniversaire.style= "opacity:0"

//// Calcul des années, mois jours /////////////////////////////////////////////////////
let année_actuelle=parseInt(`${yyyy}`)
let mois_actuel=parseInt(`${mm}`);
let jour_actuel=parseInt(`${dd}`);

let année_nais=parseInt(année_nais_input.value);
let mois_nais=parseInt(mois_nais_input.value);
let jour_nais=parseInt(jour_nais_input.value);

 if(année_actuelle>=année_nais){
//----------------------mois actuel > mois naissaince-----------------------

      if(mois_actuel>mois_nais){              
    
	 var Calcannées= année_actuelle - année_nais ;       ///  texte original
         if(jour_actuel>jour_nais){
           var Calcjours=jour_actuel-jour_nais;
           var Calcmois=mois_actuel-mois_nais;
         }
else
	if(jour_actuel==jour_nais){
  	  
          var Calcjours=0;
	  var Calcmois=mois_actuel-mois_nais;
	 }
       
else
        if(jour_actuel<jour_nais){
	var Calcmois=mois_actuel-mois_nais-1;
	var Calcjours=0;
        var Calcjours=Nbjour_mois[mois_actuel-1]-jour_nais+jour_actuel;
}
}
       else        
//-----------------------------mois actuel = mois naissaince-----------------------

	 if(mois_actuel==mois_nais){           
            if(jour_actuel>jour_nais){
		var Calcmois=0;
                var Calcannées= année_actuelle - année_nais ;
                var Calcjours=jour_actuel-jour_nais;
	    } 
             else

	    if(jour_actuel==jour_nais){        //date anniversaire 
		var Calcmois=0;
                var Calcannées= année_actuelle - année_nais ;   
                var Calcjours=0;
              Anniversaire.style= "opacity:1"
	    } 
            else
	    if(jour_actuel<jour_nais){
		var Calcmois=11;
                var Calcannées= année_actuelle - année_nais-1 ; 
                var Calcjours=Nbjour_mois[mois_actuel-1]-jour_nais+jour_actuel;
	    }
           }
       else
//---------------------------------------------------------------------------	   
     	if(mois_actuel<mois_nais){               // mois actuel < mois naissaince
            			  
	      if(jour_actuel>jour_nais){
			var Calcannées= année_actuelle - année_nais-1;
               		var Calcmois=12-(mois_nais-mois_actuel);
                	var Calcjours=jour_actuel-jour_nais;
    		  }
	        else
		  if(jour_actuel==jour_nais){
               		var Calcannées= année_actuelle - année_nais-1 ;  
			var Calcmois=12-(mois_nais-mois_actuel);
                	var Calcjours=0;
       		   }
	  	else{
	   		var Calcannées= année_actuelle - année_nais-1 ;  
			var Calcmois=12+mois_actuel-mois_nais-1;
           		var Calcjours=Nbjour_mois[mois_actuel-1]-jour_nais+jour_actuel;
	  	}
	}
       	     
       
  } 
     
    Année.innerText =`${Calcannées} Années`;
    Mois.innerText = `${Calcmois} mois`;
    Jours.innerText =`${Calcjours} jours`;
    
 
});
//// fin calcul age
  function ChangerTemps() {
    var heure = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// Autre possibilité enintégrant la date et l'heure
var dates = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
 
var fullDate = dates +' '+heure;
    HeureActuelle.innerText=`${fullDate}`;
  }
  

 
   
  //let Elt=document.getElementById('List_Mois');
  //const Elet_Option = document.createElement('option');
  //Elt.appendChild(Elet_Option);
  //Elet_Option.innerText="--- Choityte page ---";
   
   for (i=0;i<12;i++) {
    let Elt=document.getElementById('List_Mois');
    const Elet_Option = document.createElement('option');
    Elt.appendChild(Elet_Option);
     Elet_Option.innerText=Tabmois[i];
    }
   // récuper l'indice du mois sélectionné
   
   List_Mois.addEventListener("change",(e)=>{
    var select_Elt=document.getElementById('List_Mois');
    var valeurselectionnee = select_Elt.options[select_Elt.selectedIndex].value;
    var valeurselectionnee =  select_Elt.selectedIndex;
     
     document
      .getElementById("Mois_input").value=valeurselectionnee;
        
   })

 
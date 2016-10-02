console.log("bonjour");

function verification() {
    var drugPrice = 30;
    
    // Récupération du nombre de crédits restants
    var remaining = $("#remaining_credit").html();
    console.log("Crédits restants : " + remaining);
    
    // Récupération de sa mise
    var mise = $("#mise").prop("valueAsNumber");
    console.log("Mise : " + mise);
    
    // Veut-il doper sa vache ?  
    var drug = $("#drug").prop("checked");
    console.log("Drug ? " + drug);
    
    // Calcul pour savoir s'il peut commencer la partie ou non
    var realDrugPrice = (drug) ? drugPrice : 0;
    var peutJouer = (realDrugPrice + mise) <= parseInt(remaining);
    console.log("Peut jouer : " + peutJouer);
    
    // S'il ne peut pas jouer, alors on grise le bouton
    $("#start").prop("disabled", !peutJouer);
}



function startRace() {
    // Toutes les 50ms on déplace les vaches
    console.log("Démarrage de la course");
    mouvement();
}

function mouvement() {
    // Faire bouger les 4 vaches
    var ellipses = document.getElementsByTagName("ellipse");
    for(i=0;i<ellipses.length;i++) {
        bouge(ellipses[i].id);
    }
}

function bouge(idVache) {
    // Détermination de la distance
    var distance = determinerDistance();
    
    // Bouge
    faireBougerUneVache(idVache, distance);
}

function determinerDistance() {
    // Random entre 5 et 10
    var distance = Math.floor((Math.random() * 5) + 5);
    
    return distance;
}

function faireBougerUneVache(id, distance) {
    console.log("Déplacement de la vache " + id + " de " + distance + "px");
    $("#"+id).css({"transform":"translateX("+distance+"px)"});
}

/*
$( document ).ready(function() {
    verification();
});
*/
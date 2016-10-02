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

$( document ).ready(function() {
    verification();
});

function countDown() {
    
}

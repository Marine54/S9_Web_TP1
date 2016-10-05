// Permet de vérifier si la course peut commencer
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
    return peutJouer;

    // S'il ne peut pas jouer, alors on grise le bouton
    // $("#start").prop("disabled", !peutJouer);
}

// Méthode appelée lorsque l'utilisateur clique sur "Start the race"
function initStart() {
    if (verification()) {
        // On désélectionne le boutonn start pour éviter qu'il clique plusieurs fois
        $("#start").prop("disabled", true);
start
        // On enlève sa mise
        var mise = parseInt($("#mise").prop("value"));
        var credits = parseInt($("#remaining_credit").html());
        $("#remaining_credit").html(credits - mise);

        // Lancement du décompte
        startTimer();
    } else {
        $("#countdown").html("Erreur: pas assez de crédits. Le jeu ne peut pas commencer.");
    }
}

function startTimer() {
    $("#countdown").html("");
    // Timer
    var timer = setInterval(function () {
        var content = $("#countdown").html();
        if (content === "") {
            $("#countdown").html("3");
        } else {
            var contentNumber = parseInt(content);
            var newContentNumber = contentNumber - 1;

            if (newContentNumber === 0) {
                // Fin du timer, début de la course
                $("#countdown").html("GO");
                clearInterval(timer);
                startRace();
            } else {
                $("#countdown").html(newContentNumber);
            }

        }
    }, 1000);
}

var intervalMove;
function startRace() {
    // Toutes les 50ms on déplace les vaches
    console.log("Démarrage de la course");

    intervalMove = setInterval(function () {
        mouvement();
    }, 50);
}

function mouvement() {
    // Faire bouger les 4 vaches
    var ellipses = document.getElementsByTagName("ellipse");
    for (i = 0; i < ellipses.length; i++) {
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
    //console.log("Déplacement de la vache " + id + " de " + distance + "px");
    var valueX = parseInt($("#" + id).attr("cx")) + distance;
    $("#" + id).attr("cx", valueX);
    
    // On test si la vache a atteint la ligne d'arrivée
    if (valueX > 910) {
        console.log(id + " a gagné ! ");
        clearInterval(intervalMove);
    }
    
}
var globalTip = 0;
hide();

function selectTip(tip, ID) {
    globalTip = tip;

    //Obtener valor
    var Bill = document.getElementById("bill").value;
    var People = document.getElementById("people").value;

    // mantener el color del resto de botones verde
    var buttons = document.getElementsByClassName("tip-button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = '#00474b';
    }
    document.getElementById(ID).style.backgroundColor = "#26c2ad"; //color focus
    document.getElementById("tip_custom").value = "";

    if (Bill != "" && People != "" && People != 0) {
        // Calcular tip y mostrar
        document.getElementById("person_tip").innerHTML = "$" + Math.round(Bill * globalTip / People) / 100;
        document.getElementById("person_total").innerHTML = "$" + Math.round(Bill * (globalTip + 100) / People) / 100;
    }
    hide();
};

function update() { //onchange
    var Bill = document.getElementById("bill").value;
    var People = document.getElementById("people").value;
    var alert = document.getElementById("alert-id");
    alert.style.display = "none";

    if (People == 0) {
        alert.style.display = "block";
    }
    else if (Bill != "" && People != "" && globalTip != 0) {
        document.getElementById("person_tip").innerHTML = "$" + Math.round(Bill * globalTip / People) / 100;
        document.getElementById("person_total").innerHTML = "$" + Math.round(Bill * (globalTip + 100) / People) / 100;
    }
    hide();
}

function customTip(value) {
    globalTip = parseInt(value);
    var Bill = document.getElementById("bill").value;
    var People = document.getElementById("people").value;

    var buttons = document.getElementsByClassName("tip-button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = '#00474b';
    }

    if (Bill != "" && People != "" && People != 0 && globalTip != 0) {
        document.getElementById("person_tip").innerHTML = "$" + Math.round(Bill * globalTip / People) / 100;
        document.getElementById("person_total").innerHTML = "$" + Math.round(Bill * (globalTip + 100) / People) / 100;
    }
    hide();
}

function reset() {
    globalTip = 0;

    var buttons = document.getElementsByClassName("tip-button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = '#00474b';
    }

    document.getElementById("bill").value = "";
    document.getElementById("people").value = "";
    document.getElementById("tip_custom").value = "";

    document.getElementById("person_tip").innerHTML = "$0.00";
    document.getElementById("person_total").innerHTML = "$0.00";
    hide();
}

function hide() {
    var Bill = document.getElementById("bill").value;
    var People = document.getElementById("people").value;

    if (Bill == "" && People == "" && globalTip == 0) {
        document.getElementById("reset_button").disabled = true;
        document.getElementById("reset_button").style.opacity = 0.3;
    }
    else {
        document.getElementById("reset_button").disabled = false;
        document.getElementById("reset_button").style.opacity = 1;
    }

}

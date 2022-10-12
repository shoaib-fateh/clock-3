function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// timer
var flag = true;
var hour = 0;
var min = 0;
var sec = 0;
var tiemoutsec;

document.querySelector("#Timer div .start").addEventListener("click", () => {

    if (flag == true) {
        document.querySelector("#Timer div .start").innerHTML = "STOP";
        document.querySelector("#Timer div .retry").style.display = "inline";
        secound();
        function secound() {
            sec++;
            if (sec == 60) {
                sec = 0;
                if (min == 60) {
                    min = 0;
                    hour++;
                }
                min++;
            }
            tiemoutsec = setTimeout(secound, 1000);
            document.querySelector("#Timer h1").innerHTML = hour + " : " + min + " : " + sec;
        }
        flag = false;
    } else if (flag == false) {
        document.querySelector("#Timer div .start").innerHTML = "START";
        document.querySelector("#Timer div .retry").style.display = "none";
        clearTimeout(tiemoutsec);
        flag = true;
    }
    
});
document.querySelector("#Timer div .retry").addEventListener("click", () => {
    hour = 0;
    min = 0;
    sec = 0;
    document.querySelector("#Timer h1").innerHTML = hour + " : " + min + " : " + sec;
    document.querySelector("#Timer div .start").innerHTML = "START";
    document.querySelector("#Timer div .retry").style.display = "none";
    clearTimeout(tiemoutsec);
});

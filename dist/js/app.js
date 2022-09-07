

var dark = document.getElementById("dark");
var icon = document.getElementById("computer");

//--DARK MODE
dark.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        dark.src= "images/Sun.svg";
        icon.src= "images/Computer-icon-night.svg";
    } else {
        dark.src= "images/Moon.svg";
        icon.src= "images/Computer-icon-day.svg";
    }
}
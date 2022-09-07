

var icon = document.getElementById("computer");


//--DARK MODE

if (window.matchMedia("(prefers-color-scheme: dark)")){
    icon.src= "images/Computer-icon-night.svg";
} else if (window.matchMedia("(prefers-color-scheme: light)")){
    icon.src= "images/Computer-icon-day.svg";
} else {
}



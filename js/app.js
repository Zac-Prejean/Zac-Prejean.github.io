

var icon = document.getElementById("icon")
var computerIcon = document.getElementById("computer")
let topBtn = document.getElementById("top-btn");

//--DARK MODE

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        icon.src = "images/sun.png";
        computerIcon.src = "images/Computer-icon-night.svg";
    } else {
        icon.src= "images/moon.png";
        computerIcon.src = "images/Computer-icon-day.svg";
    }
};

//--Back TO TOP BTN

topBtn.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



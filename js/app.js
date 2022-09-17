

var icon = document.getElementById("icon")
let topBtn = document.getElementById("top-btn");

//--DARK MODE

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        icon.src = "images/sun.png";
    } else {
        icon.src= "images/moon.png";
    }
};

//--Back TO TOP BTN

topBtn.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//--Typed Text

var typed =new Typed(".auto-type", {
    strings: ["Project", "topic", "party", "Idea" ],
    typeSpeed: 100,
    backSpeed: 150,
    loop: true,
})


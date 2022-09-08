

const lightIcon = document.getElementById("computerLight");
const darkIcon = document.getElementById("computerDark");
var lightTheme = window.matchMedia("(prefers-color-scheme: light)");
var darkTheme = window.matchMedia("(prefers-color-scheme: dark)");


//--DARK MODE

if (lightTheme) {
    darkIcon.style.display = "none";
    lightIcon.style.display = "show";
} else if (darkTheme){
    lightIcon.style.display = "none";
    darkIcon.style.display = "show";
}


console.log(lightTheme)
console.log(darkTheme)

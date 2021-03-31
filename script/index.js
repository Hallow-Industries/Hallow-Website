const navbar = document.getElementById("nav-bar");
const backsheet = document.getElementById("backsheet");

function scrollEffects() {
    var offset = backsheet.offsetTop;

    if (window.pageYOffset >= offset - 65) {
        navbar.style.backgroundColor = "#111";
    } else {
        navbar.style.backgroundColor = "transparent";
    }

    console.log(offset);
    console.log(window.pageYOffset);
}

document.onscroll = () => { scrollEffects(); }
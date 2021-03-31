const background = document.getElementById("background");
const navbar = document.getElementById("nav-bar");
const navbar2 = document.getElementById("nav-bar-2");

// Functions
function parallax() {
    background.style.top = Math.floor(-20 - 0.2575 * window.scrollY) + "px";
    background.style.filter = "blur(" + Math.floor(5 + 0.02575 * window.scrollY) + "px)"

    var offset = navbar.offsetTop;

    if (window.pageYOffset >= offset) {
        navbar2.style.top = "0.05%";
    } else {
        navbar2.style.top = "125%";
    }
}
// Listeners
document.onscroll = () => { parallax(); }
// Utils

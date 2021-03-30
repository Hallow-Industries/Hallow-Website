const background = document.getElementById("background");

// Functions
function parallax() {
    background.style.top = Math.floor(-20 - 0.195 * window.scrollY) + "px";
    background.style.filter = "blur(" + Math.floor(3 + 0.0195 * window.scrollY) + "px)"
}
// Listeners
document.onscroll = () => { parallax(); }
// Utils

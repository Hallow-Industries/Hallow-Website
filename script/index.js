const navbar = document.getElementById("nav-bar");
const backsheet = document.getElementById("backsheet");
const title = document.getElementById("title");

function scrollEffects() {
    var offset = backsheet.offsetTop;

    title.style.top = Math.round(37.5 - 0.17 * window.scrollY) + "%";

    if (window.pageYOffset >= offset - 65) {
        navbar.style.backgroundColor = "#111";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
}

function creditClick() {
    const url = "https://yochran.tohi.dev/";
    window.open(url, "_blank");
}

document.onscroll = () => { scrollEffects(); }
document.getElementById("credit-link").onclick = () => { creditClick(); }
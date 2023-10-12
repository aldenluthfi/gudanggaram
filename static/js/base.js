const body = document.body;

const scrollWrap = document.getElementsByClassName("smooth-scroll")[0];
const cursorDot = document.getElementsByClassName("cursor-dot")[0];
const clickables = document.querySelectorAll(".clickable");

height = scrollWrap.getBoundingClientRect().height - 1;
speed = 0.1;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
    offset += (window.scrollY - offset) * speed;

    var scroll = "translateY(-" + offset + "px) translateZ(0)";
    scrollWrap.style.transform = scroll;

    callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();

window.addEventListener(
    "mousemove",
    function (e) {
        cursorDot.animate({
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
        }, { duration: 200, fill: "forwards"});
    }
)

window.addEventListener(
    "mousedown",
    function (e) {
        cursorDot.animate({
            width: '1rem',
            height: '1rem',
        }, { duration: 200, fill: "forwards", easing:"cubic-bezier(0.3, 0.2, 0.2, 1.4)"});
    }
)

window.addEventListener(
    "mouseup",
    function (e) {
        cursorDot.style.background = "var(--transparent)";
        cursorDot.style.border = "0.2rem solid var(--dark)";
        cursorDot.animate({
            width: '2.5rem',
            height: '2.5rem',
        }, { duration: 200, fill: "forwards", easing:"cubic-bezier(0.3, 0.2, 0.2, 1.4)"});
    }
)

clickables.forEach(clickable => {
    clickable.addEventListener(
        "mouseover",
        function (e) {
            cursorDot.style.border = "none";
            cursorDot.style.background = "var(--dark)";
            cursorDot.animate({
                width: '1rem',
                height: '1rem',
            }, { duration: 200, fill: "forwards", easing:"cubic-bezier(0.3, 0.2, 0.2, 1.4)"});
        }
    );
    clickable.addEventListener(
        "mouseleave",
        function (e) {
            cursorDot.style.background = "var(--transparent)";
            cursorDot.style.border = "0.2rem solid var(--dark)";
            cursorDot.animate({
                width: '2.5rem',
                height: '2.5rem',
            }, { duration: 200, fill: "forwards", easing:"cubic-bezier(0.3, 0.2, 0.2, 1.4)"});
        }
    );
})
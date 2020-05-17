const logo = document.querySelectorAll("#logo path");
document.addEventListener('DOMContentLoaded', () => {
    function animateSgv(id, delay, delayIncrement) {
        const logo = document.getElementById(id);
        const logoPaths = document.querySelectorAll(`#${id} path`);
        delay = delay;
        for (let i = 0; i < logoPaths.length; i++) {
            logoPaths[i].style.strokeDasharray = logoPaths[i].getTotalLength();
            logoPaths[i].style.strokeDashoffset = logoPaths[i].getTotalLength();
            logoPaths[i].style.animation = `line-anim 2s ease forwards ${delay}s`;
            delay += delayIncrement;
        }
        logo.style.animation = `fill 0.5s ease forwards ${delay + 1.5}s, scal 1s ease forwards 5s,posi 1s ease forwards 6s`;
    }
    // Set the id of SVG, delay time in seconds to start animation and delay between each animation
    animateSgv('logo', 0, 0.3)
}, false);


var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 6000);
}

function showPage() {
    document.querySelector(".content").style.display = "block";
}
const navbutton = () => {
    const burger = document.querySelector('.fab-icon-holder');
    const nav = document.querySelector('.fab-options');
    const navlinks = document.querySelectorAll('.fab-options li');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');



        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navlinkfade 0.5s ease ${index / 10}s forwards`;
            }
        });
        burger.classList.toggle('toggle');
    });

}
navbutton();
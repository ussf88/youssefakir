const logo = document.querySelectorAll("#logo path");
document.addEventListener('DOMContentLoaded', () => {
    function animateSgv(id, delay, delayIncrement) {
        const logo = document.getElementById(id);
        const logoPaths = document.querySelectorAll(`#${id} path`);
        delay = delay;
        for (let i = 0; i < logoPaths.length; i++) {
            let id = logoPaths[i].id;
            if (id == 'white') {
                logoPaths[i].style.animation = `fillwhite 0.5s ease forwards ${delay + 1.5}s`;
                logoPaths[i].setAttribute('stroke', 'white');
            } else if (id == "keybord") {
                logoPaths[i].style.animation = `fillscreen 0.5s ease forwards ${delay + 1.5}s`;
                logoPaths[i].setAttribute('stroke', '#020202');
            }
            else if (id == "screen") {
                logoPaths[i].style.animation = `fillscreen 0.5s ease forwards ${delay + 1.5}s`;
                logoPaths[i].setAttribute('stroke', '#101820');
            } else {
                logoPaths[i].style.animation = `fillwords 0.5s ease forwards ${delay + 1.5}s`;
                logoPaths[i].setAttribute('stroke', '#F2AA4CFF');
            }
            logoPaths[i].setAttribute('stroke-width', '3');
            logoPaths[i].removeAttribute('fill');
            logoPaths[i].style.strokeDasharray = logoPaths[i].getTotalLength();
            logoPaths[i].style.strokeDashoffset = logoPaths[i].getTotalLength();
            logoPaths[i].style.animation += `,line-anim 2s ease forwards ${delay}s`;
            delay += delayIncrement;
        }
        logo.style.animation = `fillwords 0.5s ease forwards ${delay + 1.5}s, scal 1s ease forwards 5s,posi 1s ease forwards 6s`;
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





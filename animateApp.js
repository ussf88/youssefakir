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
const hero = document.querySelector('.hero');
const myimg = hero.querySelector('img');
const slider = document.querySelector('.slider');
const headline = document.querySelector('.headline');
const tl = new TimelineMax();









// get the element to animate
var element = document.querySelector(".about");
var elementHeight = element.clientHeight;
var txt = "Hey There my name is Youssef El Faquir and i Am a web Developer << Currently I'am a Student At The National School of Computer Science ENSIAS Located in Rabat << I was Always a passionate about Computer Science always seeking  fond of Web Development and Web Design";
var i = 0; /* The text */
var speed = 50;
function typeWriter() {
    if (i < txt.length) {
        if (txt.charAt(i) == "<") {
            document.querySelector(".about_text").innerHTML += "<br/>";
            i++;
        }
        else {
            document.querySelector(".about_text").innerHTML += txt.charAt(i);
            i++;
        }
        setTimeout(typeWriter, speed);
    }
}

// listen for scroll event and call animate function
document.addEventListener('scroll', function () {
    animate(typeWriter)
});
var thing = 1;

// check if element is in view
function inView() {
    // get window height
    var windowHeight = window.innerHeight;
    // get number of pixels that the document is scrolled
    var scrollY = window.scrollY || window.pageYOffset;

    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    var scrollPosition = scrollY + windowHeight;
    // get element position (distance from the top of the page to the bottom of the element)
    var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;

    // is scroll position greater than element position? (is element in view?)
    if (scrollPosition > elementPosition && thing == 1) {
        thing = 0;
        return true;
    }

    return false;
}
console.log(thing);

// animate element when it is in view
function animate(callback) {
    // is element in view?
    if (inView()) {
        tl.fromTo(hero, 1.5, { height: "0%" }, { height: "80%", ease: Power2.easeInOut }, "+=1")
            .fromTo(hero, 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut })
            .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")
            .to(myimg, 2, {
                onUpdateParams: ["{self}"],
                onUpdate: function (tl) {
                    var tlp = (tl.progress() * 10) >> 0;
                    TweenMax.set(myimg, { '-webkit-filter': 'blur(' + tlp + 'px' + ')', 'filter': 'blur(' + tlp + 'px' + ')' });
                }
            });
        const use = document.querySelector('.introduction');
        console.log("width: " + use.getBoundingClientRect().width);
        setTimeout(callback, 5000);
        /* The speed/duration of the effect in milliseconds */
    }
}








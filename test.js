function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}
function getmclass(page) {
    return page.charAt(0).toLowerCase();
}
function getlclass(page) {
    if (page == "Projects") {
        return "project";
    } else {
        return page.charAt(2).toLowerCase();
    }
}
gsap.registerPlugin(ScrollTrigger);
function pageTransition() {
    var tl = gsap.timeline();
    var myload = document.querySelector('.loading-screen');
    tl.to(myload, { duration: 1.2, width: "100%", left: "0%", ease: "Expo.easeInOut" });
    tl.to(myload, { duration: 1, width: "100%", left: "100%", ease: "Expo.easeInOut", delay: 0.3 });
    tl.set(myload, { left: "-100%" });
    console.log("pageTransition");

}

// Function to animate the content of each page
function contentAnimation() {
    var myload = document.querySelector('.loading-screen');
    var mlink = document.querySelectorAll('a');
    mlink.forEach((plink) => {
        plink.addEventListener('click', (e) => {
            myload.innerHTML = e.currentTarget.dataset.link;
        });
    })
    if (myload.innerHTML == "Projects") {
        console.log("hello");
        var tl1 = gsap.timeline({
            ease: Power4.out,
            scrollTrigger: {
                trigger: ".left2",
                start: "top bottom"

            }
        });
        var tl2 = gsap.timeline({
            ease: Power4.out,
            scrollTrigger: {
                trigger: ".right1",
                start: "top bottom"

            }
        });
        var tl3 = gsap.timeline({
            ease: Power4.out,
            scrollTrigger: {
                trigger: ".right2"

            }
        });
        tl1.from('.left2 .imgbox', { css: { opacity: "0", left: "-100%" }, ease: "Expo.easeInOut", duration: 1 });
        tl2.from('.right1 .imgbox', { css: { right: "-100%", opacity: "0" }, ease: "Expo.easeInOut", duration: 1 });
        tl3.from('.right2 .imgbox', { css: { right: "-100%", opacity: "0" }, ease: "Expo.easeInOut", duration: 1 });
        var clickMes = document.querySelectorAll('.click-me');
        clickMes.forEach((clickMe) => {
            clickMe.addEventListener('click', (e) => {
                var imgbox = e.currentTarget.parentNode;
                if (imgbox.parentNode.classList.contains('left1') || imgbox.parentNode.classList.contains('left2')) {
                    imgbox.classList.toggle('left');
                    console.log('left');
                } else {
                    imgbox.classList.toggle('right');
                    console.log('right');
                }
                if (e.currentTarget.querySelector('i').classList == "fas fa-compress-alt") {
                    e.currentTarget.querySelector('i').classList = "fas fa-expand-alt";
                    console.log("expand");
                }
                else {
                    e.currentTarget.querySelector('i').classList = "fas fa-compress-alt";
                    console.log("compress");
                }
            });
        })
    }
    var circles = document.querySelector("." + getmclass(myload.innerHTML));
    var pages = circles.nextElementSibling;
    console.log("the pages are" + pages);
    var combined = document.querySelector("." + getlclass(myload.innerHTML));
    console.log(combined);
    circles.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('closed');
        if (circles.classList.contains('closed')) {
            tl.to('.pages .page', { duration: .5, x: 200, stagger: 0.1 });
            //var page = pages.querySelectorAll('.page');
            //var delay = 0;
            //page.forEach((p) => {
            //   p.style.animation = `nav-hide 1s ease-in  ${delay}`;
            //  delay += 0.2;
            //})
            setTimeout(function () { combined.style.webkitFilter = "blur(0)"; pages.style.zIndex = "-1"; }, 500);
            console.log(pages.style.border);
        }
        else {
            pages.style.zIndex = "150";
            tl.fromTo('.pages .page', { x: 200 }, { x: 0, duration: .5, stagger: .1 });
            //pages.style.display = "flex";
            combined.style.webkitFilter = "blur(1rem)";
        }
    });
    window.addEventListener('resize', (e) => {
        if (window.innerWidth > 1000) {
            combined.style.webkitFilter = "blur(0)";
            pages.style.zIndex = "999";
            pages.querySelectorAll('.page').forEach(element => {
                element.style.transform = "translateX(0)";
            });
        } else {
            pages.querySelectorAll('.page').forEach(element => {
                element.style.transform = "translateX(200%)";
            });
        }
    });

    var tl = gsap.timeline();
    var animatedchilds = document.querySelectorAll(".onload-animated");
    if (animatedchilds.length != 0) {
        tl.from(animatedchilds, { duration: 1, css: { transform: "translateY(-70%)" }, delay: 0.5 });
    }
    console.log("contentAnimation");
}
function contentAnimationOnce() {
    var myload = document.querySelector('.loading-screen');
    var mlink = document.querySelectorAll('a');
    mlink.forEach((plink) => {
        plink.addEventListener('click', (e) => {
            myload.innerHTML = e.currentTarget.dataset.link;
        })

    });
    var tl = gsap.timeline();
    var animatedchilds = document.querySelectorAll(".onload-animated");
    if (animatedchilds.length != 0) {
        tl.from(animatedchilds, { duration: 1, css: { transform: "translateY(-70%)" }, delay: 0.5 });
    }
    var circles = document.querySelector('.circles');
    var pages = document.querySelector('.pages');
    var combined = document.querySelector('.combined');
    console.log(combined);
    circles.addEventListener('click', (e) => {
        console.log('hi');
        e.currentTarget.classList.toggle('closed');
        if (circles.classList.contains('closed')) {
            tl.to('.pages .page', { duration: .5, x: 200, stagger: 0.1 });
            console.log("pages");
            //var page = pages.querySelectorAll('.page');
            //var delay = 0;
            //page.forEach((p) => {
            //   p.style.animation = `nav-hide 1s ease-in  ${delay}`;
            //  delay += 0.2;
            //})
            combined.style.webkitFilter = "blur(0)";
        }
        else {
            tl.fromTo('.pages .page', { x: 200 }, { x: 0, duration: .5, stagger: .1 });
            //pages.style.display = "flex";
            combined.style.webkitFilter = "blur(1rem)";
        }
    });
    window.addEventListener('resize', (e) => {
        if (window.innerWidth > 1000) {
            console.log("hi");
            var apage = pages.querySelectorAll('.page');
            apage.forEach((pg) => {
                pg.style.transform = 'translate(0%)';
            })
        }
    });
}

$(function () {

    barba.init({

        sync: true,

        transitions: [{

            async leave(data) {

                const done = this.async();

                pageTransition();
                await delay(1200);
                done();

            },

            async enter(data) {
                contentAnimation();
            },

            async once(data) {
                contentAnimationOnce();
            }

        }]
    });

});
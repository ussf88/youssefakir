function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}
/* =================

author: Karan Mhatre
email: me@karanmhatre.com
website: karanmhatre.com
 
================= */

// Function to add and remove the page transition screen
function pageTransition() {

    var tl = gsap.timeline();
    tl.set(".introduction", { transformOrigin: "50% 50%" });
    tl.to('div.introduction div', { duration: .5, scaleY: 0.7, opacity: 0 });
    tl.set(".introduction", { transformOrigin: "98.08% 25.3%" });
    //tl.to('.introduction', { duration: .5, scaleY: 0.1, transform: 'translate(100%,0%)' });
    tl.to('.introduction', { duration: .5, css: { borderRadius: "50%", scaleY: 0.028, scaleX: 0.0133 } });
    //tl.to('.introduction', { duration: .5, css: { position: "absolute", right: 30, } });
    //tl.set('.loading-screen', { transformOrigin: "bottom left" });
    //tl.to('.loading-screen', { duration: .5, scaleY: 1 });
    //tl.to('.loading-screen', { duration: .5, scaleY: 0, skewX: 0, transformOrigin: "top left", ease: "power1.out", delay: 1 });
}

// Function to animate the content of each page
function contentAnimation() {

    var tl = gsap.timeline();
    tl.set(".introduction", { transformOrigin: "98.08% 25.3%" });
    tl.from('.introduction', { duration: .5, css: { borderRadius: "50%", scaleY: 0.028, scaleX: 0.0133 } });
    tl.set(".introduction", { transformOrigin: "50% 50%" });
    tl.from('div.introduction div', { duration: .5, scaleY: 0.7, opacity: 0 });

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
                contentAnimation();
            }

        }]
    });

});
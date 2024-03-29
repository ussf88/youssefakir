const logo = document.querySelectorAll("#logo path");
var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 6e3);
}
function showPage() {
    document.querySelector(".content").style.display = "block";
}
function delay(e) {
    return (
        (e = e || 2e3),
        new Promise((t) => {
            setTimeout(() => {
                t();
            }, e);
        })
    );
}
function getmclass(e) {
    return e.charAt(0).toLowerCase();
}
function getlclass(e) {
    return "Projects" == e ? "project" : e.charAt(2).toLowerCase();
}
function pageTransition() {
    var e = gsap.timeline(),
        t = document.querySelector(".loading-screen");
    e.to(t, { duration: 1.2, width: "100%", left: "0%", ease: "Expo.easeInOut" }), e.to(t, { duration: 1, width: "100%", left: "100%", ease: "Expo.easeInOut", delay: 0.3 }), e.set(t, { left: "-100%" });
}
function contentAnimation() {
    var e = document.querySelector(".loading-screen");
    (document.querySelectorAll(".pages a").forEach((t) => {
        t.addEventListener("click", (t) => {
            e.innerHTML = t.currentTarget.dataset.link;
        });
    }),
    "Projects" == e.innerHTML) &&
        document.querySelectorAll(".click-me").forEach((e) => {
            e.addEventListener("click", (e) => {
                var t = e.currentTarget.parentNode;
                t.parentNode.classList.contains("left1") || t.parentNode.classList.contains("left2") ? t.classList.toggle("left") : t.classList.toggle("right"),
                    "fas fa-compress-alt" == e.currentTarget.querySelector("i").classList ? (e.currentTarget.querySelector("i").classList = "fas fa-expand-alt") : (e.currentTarget.querySelector("i").classList = "fas fa-compress-alt");
            });
        });
    var t = document.querySelector("." + getmclass(e.innerHTML)),
        r = t.nextElementSibling,
        s = document.querySelector("." + getlclass(e.innerHTML));
    t.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("closed"),
            t.classList.contains("closed")
                ? (n.to(".pages .page", { duration: 0.5, x: 200, stagger: 0.1 }),
                  e.currentTarget.querySelectorAll(".circle").forEach((e) => {
                      e.style.backgroundColor = "#F2AA4C";
                  }),
                  setTimeout(function () {
                      (s.style.webkitFilter = "blur(0)"), (r.style.zIndex = "-1");
                  }, 500))
                : (e.currentTarget.querySelectorAll(".circle").forEach((e) => {
                      e.style.backgroundColor = "transparent";
                  }),
                  (r.style.zIndex = "150"),
                  n.fromTo(".pages .page", { x: 200 }, { x: 0, duration: 0.5, stagger: 0.1 }),
                  (s.style.webkitFilter = "blur(1rem)"));
    }),
        window.addEventListener("resize", (e) => {
            window.innerWidth > 1e3
                ? ((s.style.webkitFilter = "blur(0)"),
                  (r.style.zIndex = "150"),
                  r.querySelectorAll(".page").forEach((e) => {
                      e.style.transform = "translateX(0)";
                  }))
                : ((r.style.zIndex = "-1"),
                  r.querySelectorAll(".page").forEach((e) => {
                      e.style.transform = "translateX(200%)";
                  }));
        });
    var n = gsap.timeline(),
        a = document.querySelectorAll(".onload-animated");
    0 != a.length && n.from(a, { duration: 1, css: { transform: "translateY(-70%)" }, delay: 0.5 });
}
function contentAnimationOnce() {
    var e = document.querySelector(".loading-screen");
    (document.querySelectorAll(".pages a").forEach((t) => {
        t.addEventListener("click", (t) => {
            e.innerHTML = t.currentTarget.dataset.link;
        });
    }),
    "Projects" == e.innerHTML || null != document.querySelector(".project")) &&
        document.querySelectorAll(".click-me").forEach((e) => {
            e.addEventListener("click", (e) => {
                var t = e.currentTarget.parentNode;
                t.parentNode.classList.contains("left1") || t.parentNode.classList.contains("left2") ? t.classList.toggle("left") : t.classList.toggle("right"),
                    "fas fa-compress-alt" == e.currentTarget.querySelector("i").classList ? (e.currentTarget.querySelector("i").classList = "fas fa-expand-alt") : (e.currentTarget.querySelector("i").classList = "fas fa-compress-alt");
            });
        });
    var t = document.querySelector(".circles"),
        r = t.nextElementSibling,
        s = document.querySelector(".combined");
    t.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("closed"),
            e.currentTarget.classList.toggle("circle-transparent"),
            t.classList.contains("closed")
                ? (n.to(".pages .page", { duration: 0.5, x: 200, stagger: 0.1 }),
                  setTimeout(function () {
                      (s.style.webkitFilter = "blur(0)"), (r.style.zIndex = "-1");
                  }, 500))
                : ((r.style.zIndex = "150"), n.fromTo(".pages .page", { x: 200 }, { x: 0, duration: 0.5, stagger: 0.1 }), (s.style.webkitFilter = "blur(1rem)"));
    }),
        window.addEventListener("resize", (e) => {
            window.innerWidth > 1e3
                ? ((s.style.webkitFilter = "blur(0)"),
                  (r.style.zIndex = "150"),
                  r.querySelectorAll(".page").forEach((e) => {
                      e.style.transform = "translateX(0)";
                  }))
                : ((r.style.zIndex = "-1"),
                  r.querySelectorAll(".page").forEach((e) => {
                      e.style.transform = "translateX(200%)";
                  }));
        });
    var n = gsap.timeline(),
        a = document.querySelectorAll(".onload-animated");
    0 != a.length && n.from(a, { duration: 1, css: { transform: "translateY(-70%)" }, delay: 0.5 });
}
document.addEventListener(
    "DOMContentLoaded",
    () => {
        !(function (e, t, r) {
            const s = document.getElementById(e),
                n = document.querySelectorAll(`#${e} path`);
            t = t;
            for (let e = 0; e < n.length; e++) {
                let s = n[e].id;
                "white" == s
                    ? ((n[e].style.animation = `fillwhite 0.5s ease forwards ${t + 1.5}s`), n[e].setAttribute("stroke", "white"))
                    : "keybord" == s
                    ? ((n[e].style.animation = `fillscreen 0.5s ease forwards ${t + 1.5}s`), n[e].setAttribute("stroke", "#020202"))
                    : "screen" == s
                    ? ((n[e].style.animation = `fillscreen 0.5s ease forwards ${t + 1.5}s`), n[e].setAttribute("stroke", "#101820"))
                    : ((n[e].style.animation = `fillwords 0.5s ease forwards ${t + 1.5}s`), n[e].setAttribute("stroke", "#F2AA4CFF")),
                    n[e].setAttribute("stroke-width", "3"),
                    n[e].removeAttribute("fill"),
                    (n[e].style.strokeDasharray = n[e].getTotalLength()),
                    (n[e].style.strokeDashoffset = n[e].getTotalLength()),
                    (n[e].style.animation += `,line-anim 2s ease forwards ${t}s`),
                    (t += r);
            }
            s.style.animation = `fillwords 0.5s ease forwards ${t + 1.5}s, scal 1s ease forwards 5s,posi 1s ease forwards 6s`;
        })("logo", 0, 0.3);
    },
    !1
),
    $(function () {
        barba.init({
            sync: !0,
            transitions: [
                {
                    async leave(e) {
                        const t = this.async();
                        pageTransition(), await delay(1200), t();
                    },
                    async enter(e) {
                        contentAnimation();
                    },
                    async once(e) {
                        contentAnimationOnce();
                    },
                },
            ],
        });
    });


var slideIndex = 1;


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
 
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
 
}


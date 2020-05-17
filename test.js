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
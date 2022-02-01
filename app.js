const translate = document.querySelectorAll(".translate");
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const bigTitle = document.querySelector(".big-title");
const header = document.querySelector("header");
const translateAbout = document.querySelectorAll(".translateAbout");


let header_height = header.offsetHeight;


window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    })

    bigTitle.style.opacity = - scroll / (header_height / 2) + 1;

    navbar.classList.toggle('sticky', window.scrollY > 0);

    if(scroll >= 143) {
        translateAbout.forEach(element => {
            let speed = element.dataset.speed;
            element.style.transform = `translateY(${scroll * speed}px)`;
        })
    }
})

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
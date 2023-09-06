'use strict';
// preload

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    this.document.body.classList.add("loaded");
});

// sticky navbar
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle ("sticky", window.scrollY > 0)
});

// navbar 
let menu = document.querySelector ("#menu-icon");
let navlist = document.querySelector (".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navlist.classList.remove("open");
}

// scroll ScrollReveal
const sr = ScrollReveal ({
    distance: '20px',
    duration: 2000,
    reset: true
})

sr.reveal('.home-text', {delay:280, origin:'bottom'})

sr.reveal('.about, .shop, .footer', {delay:240, origin:'bottom'})

sr.reveal('.contact', {delay:260, origin:'bottom'})
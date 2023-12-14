
function toggleMenu() {
    const e = document.querySelector(".menu");
    const m = document.querySelector(".menuButton");
    e.classList.toggle("menu-show");
    m.classList.toggle("close");
}


$(document).ready(function () {
    $('.carousel').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        speed: 0,
    });
});

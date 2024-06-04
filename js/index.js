const menu = document.querySelector('#menu-icon');
const navlink = document.querySelector('.nav-link');

// responsive navbar
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navlink.classList.toggle('open');
}

// swipper
const swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    slidesPerGroup: 3,
    loop: true,
    centerSlide: 'true',
    Fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        }
    }
});
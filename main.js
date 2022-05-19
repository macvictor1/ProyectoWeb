document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav__ul").classList.toggle("show");
});
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.new__cards', { delay: 500 });
ScrollReveal().reveal('.cards__banner-one', { delay: 500 });
ScrollReveal().reveal('.cards__banner-two', { delay: 500 });
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    slidesPerGroup: true,
    loop: false,
    loopFillGroupWithBlank: null,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
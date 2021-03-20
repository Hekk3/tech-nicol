const workSwiper = new Swiper('.work__slider', {

  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,
  spaceBetween: 31,

  // Navigation arrows
  navigation: {
    nextEl: '.work__slider-next',
    prevEl: '.work__slider-prev',
  },
});
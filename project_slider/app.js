var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  speed: 2000,
  loop: true,

  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next, .next',
    prevEl: '.swiper-button-prev, .prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});

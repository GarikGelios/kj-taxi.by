"use strict"; // этот код работает в современном строгом режиме

// Slick Slider
$(document).ready(function(){
  $('.carousel_taxi-services').slick({
      // centerMode: true,
      // centerPadding: '60px',
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
              }
          }
      ]
  });
});
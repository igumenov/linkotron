$(document).ready(function(){
    $('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1
      }
    }],    
    });
});
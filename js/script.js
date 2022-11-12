$(document).ready(function () {
  // product slider
  $(".pro-img-slider").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false,
  });

  // review slider
 $(".reviews-slider").slick({
   dots: true,
   infinite: true,
   speed: 300,
   slidesToShow: 3,
   slidesToScroll: 1,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
         infinite: true,
         dots: true,
       },
     },
     {
       breakpoint: 767,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
       },
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
       },
     },
   ],
 });
				


});
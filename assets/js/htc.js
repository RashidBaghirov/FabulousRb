$(".responsive").slick({
    dots: false,
    infinite: true,
    variableWidth: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<i class="fa-solid fa-chevron-left left_arrow">',
    nextArrow: '<i class="fa-solid fa-chevron-right right_arrow">',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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



  $(".htc_title").click(function () {
    
    $(this).toggleClass("active");
    $(this).next().slideToggle();
    $(".htc_info").not($(this).next()).slideUp();
    // $(".htc_title").removeClass("active");
  });



  $('#htc_product .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
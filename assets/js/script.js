$(document).ready(function () {
  $(".mobil-bars").on("click", function () {
    $(".mobile-menu").addClass("active");
    $(".search_input").removeClass("active");
  });
  $(".xbtn").on("click", function () {
    $(".mobile-menu").removeClass("active");
  });
  $(".first").on("click", function () {
    $(".drone-icon").toggleClass("active");
    $(".first").toggleClass("active");
  });
  $(".second").on("click", function () {
    $(".acs-icon").toggleClass("active");
    $(".second").toggleClass("active");
  });
  $(".accesories").on("mouseover", function () {
    $(".accesories-menu").addClass("active");
  });
  $(".accesories").on("mouseout", function () {
    $(".accesories-menu").removeClass("active");
  });
  $(".drone").on("mouseover", function () {
    $(".drone-menu").addClass("active");
  });
  $(".drone").on("mouseout", function () {
    $(".drone-menu").removeClass("active");
  });
  $(".fa-magnifying-glass").on("click", function () {
    $(".search_input").toggleClass("active");
    $(".user_mobile_registration").removeClass("active");
  });
  $(".large_glass").on("click", function () {
    $(".search_input_large").toggleClass("active");
    $(".user_registration").removeClass("active");
  });
  $(".large_user").on("click", function () {
    $(".user_registration").toggleClass("active");
    $(".search_input_large").removeClass("active");
  });
  $(".mobile_user").on("click", function () {
    $(".user_mobile_registration").toggleClass("active");
    $(".search_input").removeClass("active");
  });
  setInterval(function () {
    $(".sliderContent").addClass("animate__fadeInDownBig");
    setTimeout(function () {
      $(".sliderContent").removeClass("animate__fadeInDownBig");
    }, 2450);
  }, 2500);


  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: true,
        loop: false,
      },
    },
  });
});

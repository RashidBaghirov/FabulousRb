$(document).ready(function () {
  /* Header scrool change background and position and accesories and drone menu*/
  $(window).scroll(function () {
    let big_size = $(".big-size-container");
    // let mob_size = $(".mobile-container ");
    scroll = $(window).scrollTop();
    if (scroll >= 66) {
      big_size.addClass("active");
      big_size.addClass("animate_animated animate_fadeInDown");
    } else {
      big_size.removeClass("active");
      big_size.removeClass("animate_animated animate_fadeInDown");
    }
  });
  var activeCat = "";
  function filterGroup(group) {
    if (activeCat != group) {
      $("._latest")
        .filter("." + group)
        .show();
      $("._latest")
        .filter(":not(." + group + ")")
        .hide();
      activeCat = group;
    }
  }

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

  $(".first").on("click", function () {
    $(".drone-icon").toggleClass("active");
    $(".first").toggleClass("active");
  });
  $(".second").on("click", function () {
    $(".acs-icon").toggleClass("active");
    $(".second").toggleClass("active");
  });

  $(".large_glass").on("click", function () {
    $(".search_input_large").toggleClass("active");
    $(".user_registration").removeClass("active");
  });
  $(".large_user").on("click", function () {
    $(".user_registration").toggleClass("active");
    $(".search_input_large").removeClass("active");
  });

  /* Base sections is activity and owl-carousel a */

  setInterval(function () {
    $(".droneInfo").addClass("animate__fadeInDownBig");

    setTimeout(function () {
      $(".droneInfo").removeClass("animate__fadeInDownBig");
    }, 2450);
  }, 2500);

  var owl = $("#base .owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
  });

  var carouselEl = $(".owl-carousel");
  $(".right").click(function () {
    carouselEl.trigger("next.owl.carousel");
    $(".title-text").addClass("animate__fadeInDown");
    $(".droneButton").addClass("animate__fadeInDown");
    setTimeout(function () {
      $(".title-text").removeClass("animate__fadeInDown");
      $(".droneButton").removeClass("animate__fadeInDown");
    }, 1000);
  });

  $(".left").click(function () {
    carouselEl.trigger("prev.owl.carousel");
    $(".title-text").addClass("animate__fadeInDown");
    $(".droneButton").addClass("animate__fadeInDown");

    setTimeout(function () {
      $(".title-text").removeClass("animate__fadeInDown");
      $(".droneButton").removeClass("animate__fadeInDown");
    }, 1600);
  });

  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });

  /*Latest sections filter system and slider*/

  $(".first_btn").click(function () {
    filterGroup("first_crsl");
  });
  $(".second_btn").click(function () {
    filterGroup("second_crsl ");
  });
  $(".third_btn").click(function () {
    filterGroup("third_crsl ");
  });

  var owl = $("#latest .owl-carousel");
  owl.owlCarousel({
    loop: false,
    nav: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      960: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  $(".device").on("mouseover", function () {
    $(this).find(".add_cart").addClass("active");
    $(this).find(".allbutton").addClass("active");
  });
  $(".device").on("mouseout", function () {
    $(this).find(".add_cart").removeClass("active");
    $(this).find(".allbutton").removeClass("active");
  });

  /*Responsive mobile header activity*/

  $(".accordion_btn").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).siblings(".content").slideUp("fast");
      $(this).removeClass("active");
      console.log(this);
    } else {
      $(".content").slideUp("fast");
      $(".btn").removeClass("active");
      $(this).siblings(".content").slideToggle();
      $(this).toggleClass("active");
      console.log(this);
    }
  });

  $(".mobil_bars").on("click", function () {
    $(".mobile-menu").addClass("active");
    $(".search_input").removeClass("active");
  });
  $(".xbtn").on("click", function () {
    $(".mobile-menu").removeClass("active");
  });
  $(".mobile_glass").on("click", function () {
    $(".search_input").toggleClass("active");
    $(".user_mobile_registration").removeClass("active");
  });

  $(".user").on("click", function () {
    $(".user_mobile_registration").toggleClass("active");
    $(".search_input").removeClass("active");
  });

  /* Faq sections accordions activity */

  $(".title_info_faq_title").click(function () {
    let $icon = $(this).find("i");
    $icon.toggleClass("active");
    $(this).next().slideToggle();
    $(".faq_info_").not($(this).next()).slideUp();
    $(".title_info_faq_title i").not($icon).removeClass("active");
  });

  /*Product sections owl caousel */

  $("#products .owl-carousel").owlCarousel({
    stagePadding: 50,
    loop: false,
    margin: 10,
    nav: true,
    responsive: {
      321: {
        items: 1,
      },
      621: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });
});

/*Reclams sections owl carousel */

$("#reclams  .owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 2500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});


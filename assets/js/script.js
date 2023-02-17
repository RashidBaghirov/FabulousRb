$(document).ready(function () {
 

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
      321: {
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


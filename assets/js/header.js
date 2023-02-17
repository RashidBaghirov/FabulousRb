 /* Header scrool change background and position and accesories and drone menu*/
 


  $(document).ready(function () {


    $(window).scroll(function () {
      let big_size = $(".big-size-container");
      let mob_size = $(".mobile-container ");
      scroll = $(window).scrollTop();
      if (scroll >= 66) {
        mob_size.addClass("active");
        mob_size.addClass("animate_animated animate_fadeInDown");

        big_size.addClass("active");
        big_size.addClass("animate_animated animate_fadeInDown");
      } else {
        big_size.removeClass("active");
        big_size.removeClass("animate_animated animate_fadeInDown");
        mob_size.removeClass("active");
        mob_size.removeClass("animate_animated animate_fadeInDown");
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
/*Responsive mobile header */
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

  })
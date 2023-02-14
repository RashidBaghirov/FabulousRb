$(".device").on("mouseover", function () {
    $(this).find(".add_cart").addClass("active");
    $(this).find(".allbutton").addClass("active");
  });
  $(".device").on("mouseout", function () {
    $(this).find(".add_cart").removeClass("active");
    $(this).find(".allbutton").removeClass("active");
  });


  $(".grid .grid_grip").click(function () {
    $(".second_page").fadeOut();
    $(".first_page").fadeIn();
  
  });

  $(".grid .list").click(function () {
    $(".first_page").fadeOut();
    $(".second_page").fadeIn();
  });
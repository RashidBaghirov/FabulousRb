$(document).ready(function () {
  $(".mobil-bars").on("click", function () {
    $(".menusss").addClass("active");
  });
  $(".xbtn").on("click", function () {
    $(".menusss").removeClass("active");
  });
  $(".drone").on("mousemove", function () {
    console.log("salam");
    $(".drone-menu").addClass("active");
  });
  $(".drone").on("mouseleave", function () {
    $(".drone-menu").removeClass("active");
  });
  $(".accesories").on("mousemove", function () {
    console.log("salam");
    $(".accesories-menu").addClass("active");
  });
  $(".accesories").on("mouseleave", function () {
    $(".accesories-menu").removeClass("active");
  });

  setInterval(function(){
    $(".title").addClass("animate__fadeInDown")
    setTimeout(function(){
        $(".title").removeClass("animate__fadeInDown")
    },2000)
  },2450)

  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
        },
        600:{
            items:1,
            nav:false,
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})
});

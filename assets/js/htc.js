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

$("#htc_product .owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

let share = document.querySelector(".share");
let sharediv = document.querySelector(".share_div");

share.addEventListener("click", function () {
  let html = `
  <ul class="list-unstyled">
<li>
    <span><i class="bi bi-facebook"></i></span>
    <span>Facebook</span>
</li>
<li>
    <span>
        <i  class="fa-brands fa-twitter"></i>
    </span>
    <span>Twitter</span>
</li>
<li>
    <span>
        <i class="bi bi-printer"></i>
    </span>
    <span>
        Print
    </span>
</li>
<li>
    <span><i class="bi bi-envelope"></i></span>
    <span>Email</span>
</li>
<li>
    <span><i class="bi bi-pinterest"></i></span>
    <span>Pinterest</span>
</li>
<li>
    <span><i class="bi bi-envelope-at-fill"></i></span>
    <span>Gmail</span>
</li>
<li>
    <span><i class="bi bi-linkedin"></i></span>
    <span>LinkedIn</span>
</li>
<li>
    <span><i class="bi bi-clipboard2-plus"></i></span>
    <span>More(181)...</span>
</li>
</ul>`;
  sharediv.innerHTML = " ";
  sharediv.innerHTML += html;
  sharediv.classList.toggle("active");
});

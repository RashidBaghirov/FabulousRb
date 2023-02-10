$(document).ready(function () {

  $(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 10) {
            $("header").addClass("ac");
        } else {
           $("header").removeClass("ac");
        }
    });
  });


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
  
  $(".device").on("mouseover", function () {
    $(this).find(".add_cart").addClass("active");
    $(this).find(".allbutton").addClass("active");
  });
  $(".device").on("mouseout", function () {
    $(this).find(".add_cart").removeClass("active");
    $(this).find(".allbutton").removeClass("active");
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
    autoplay: false,
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
 

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:false
        }
    }
})

});






document.addEventListener("DOMContentLoaded", function () {
  let devicestr = localStorage.getItem("device");
  let device = JSON.parse(devicestr);

  if (!device || !device.length) {
    localStorage.setItem("device", JSON.stringify([]));
  } else {
    ShowProductCount(device);
  }
});

let buttons = document.querySelectorAll(".add_cart");

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    let device = JSON.parse(localStorage.getItem("device"));
    if (!device) {
      localStorage.setItem("device", JSON.stringify([]));
      device = JSON.parse(localStorage.getItem("device"));
    }
    let product = GetProductsData(this);
    console.log(product);
    let sameid = device.find((pro) => {
      return pro.id == product.id;
    });
    if (!sameid) {
      device.push(product);
    } else {
      sameid.count++;
    }
    // ulparent.classList.remove("active");
    // ShowTotalPrice(device);
    ShowProductCount(device);
    let devicestr = JSON.stringify(device);
    localStorage.setItem("device", devicestr);
  });
});

function GetProductsData(product) {
  let parent = product.parentElement.parentElement
  let title = parent.querySelector(".title")
  let src = parent.querySelector("img").src;
  let id = parent.getAttribute("data-id");
  let price = parent.querySelector(".price").innerText;
  result = { title, src, id, price, count: 1 };
  return result;
}


function ShowProductCount(device) {
  let deviceCount = document.querySelector(".total_count");
  deviceCount.innerText = device.reduce((total, product) => {
    return (total += product.count);
  }, 0);
}

let cart = document.querySelector(".cart");
let ul = document.querySelector(".box_device");
let ulparent = document.querySelector(".box");
let exitbtn=document.querySelector(".exitbutton")
let base=document.getElementById("base");

cart.addEventListener("click", function (product) {
  document.body.style.overflowY="hidden";
  ulparent.classList.add("active");
  let device = JSON.parse(localStorage.getItem("device"));
  ul.innerHTML = " ";

  device.forEach((devices) => {
    let task = `
  <li>
  <div class="cart_image">
      <img src="${devices.src}" alt="">
  </div>
  <div class="info">
     <h6>${devices.title}</h6>
     <span>${devices.count}</span>
     x
      <span>${devices.price}AZN</span>
  </div>
  <div class="del_btn">
    <i class="fa-solid fa-trash"></i>
  </div>
  </li>
  `;
    ul.innerHTML += task;
  });
  let delbtn = document.querySelectorAll(".del_btn");

  delbtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      let li = this.parentElement;
      let id = document.querySelector("data-id");
      device = device.filter((dev) => dev.id != id);
      li.remove();
      // ShowTotalPrice(basket);
      ShowProductCount(device);
      localStorage.setItem("device", JSON.stringify(basket));
    });
  });
});

exitbtn.addEventListener("click",function(){
  ulparent.classList.remove("active");
  document.body.style.overflowY="scroll";
})

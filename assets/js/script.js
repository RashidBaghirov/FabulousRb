$(document).ready(function () {
  $(window).scroll(function () {
    let big_size = $(".big-size-container");
    let mob_size = $(".mobile-container ");
    scroll = $(window).scrollTop();
    let a = big_size.find(".li_a");
    let icon= big_size.find(".icon");
    if (scroll >= 66) {
      big_size
        .css({
          position: "fixed",
          top: 0,
          backgroundColor: "white",
          boxShadow: "1px 1px 10px 1px gray",
          zIndex: 2,
        })
        .addClass("animate_animated animate_fadeInDown");
      a.css({ color: "black" });
      icon.css({ color: "black" });
      a.mouseover(function () {
        $(this).css({ color: "#eb4d4b" });
      });
      a.mouseout(function () {
        $(this).css({ color: "black" });
      });
      icon.mouseover(function () {
        $(this).css({ color: "#eb4d4b" });
      });
      icon.mouseout(function () {
        $(this).css({ color: "black" });
      });
      mob_size.css({
        position: "fixed",
        top: 0,
        backgroundColor: "white",
        boxShadow: "1px 1px 10px 1px gray",
        zIndex: 2,
      });
      a.mouseout(function () {
        $(this).css({ color: "black" });
      });
    } else {
      if ($(window).width() >= 891) {
        big_size.css({
          position: "absolute",
          backgroundColor: "transparent",
          boxShadow: "none",
        });
        a.css({ color: "white" });
      } else {
        a.css({ color: "black" });
      }
      big_size.css({
        position: "absolute",
      });

      big_size.removeClass("animate_animated animate_fadeInDown");

      a.mouseover(function () {
        $(this).css({ color: "black" });
      });
      a.mouseout(function () {
        $(this).css({ color: "white" });
      });
    }
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

  $(".title_info_faq_title").click(function () {
    let $icon = $(this).find("i");
    $icon.toggleClass("active");
    $(this).next().slideToggle();
    $(".faq_info_").not($(this).next()).slideUp();
    $(".title_info_faq_title i").not($icon).removeClass("active");
  });

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
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
  $("#base .owl-carousel").owlCarousel({
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

  $('#latest .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#products .owl-carousel').owlCarousel({
  stagePadding: 50,
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
          items:1,
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
  let parent = product.parentElement.parentElement;
  let title = parent.querySelector(".title");
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
let exitbtn = document.querySelector(".exitbutton");
let base = document.getElementById("base");

cart.addEventListener("click", function (product) {
  document.body.style.overflowY = "hidden";
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

exitbtn.addEventListener("click", function () {
  ulparent.classList.remove("active");
  document.body.style.overflowY = "scroll";
});


let trparent = document.querySelector(".table_body");
let device = JSON.parse(localStorage.getItem("device"));
console.log(device);

device.forEach((devices) => {
  let task = `
<tr>
<td class="text-center"><div class="cart-image">
<img style="width: 104px;" src="${devices.src}" alt="">
</div></td>
 <td class="text-left">${devices.title}</td>
<td class="text-left"><span class="me-2">Product</span>${devices.id}</td>
 <td class="text-left"><div class="input-group btn-block" style="max-width: 200px;">
 <input type="text" value="1" size="1" class="form-control" style="height: 33px;">
        <span class="input-group-btn">
       <div class="buttons">
       <p class="first"><i class="fa fa-refresh"></i></p>
       <p class="second"><i class="fa fa-times-circle"></i></p>

       </div>

        </span></div></td>
    <td class="text-right unit-price">${devices.price}</td>
    <td class="text-right total-price">${devices.price}</td>
</tr>
`;
trparent.innerHTML += task;
});



let delbtn = document.querySelectorAll(".fa-times-circle");

delbtn.forEach((btn) => {
  btn.addEventListener("click", function () {
  let tr = this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
  console.log(tr);
  let src = tr.querySelector(".cart-image img").src;
  device = device.filter((devce) => devce.src != src);
  tr.remove();
  ShowProductCount(device);
  localStorage.setItem("device", JSON.stringify(device));
  });
 });


 $(".cart_info_faq_title").click(function () {
  let $icon = $(this).find("i");
  $icon.toggleClass("active");
  $(this).next().slideToggle();
  $(".cart_info_").not($(this).next()).slideUp();
  $(".cart_info_faq_title i").not($icon).removeClass("active");
});

let trparent = document.querySelector(".table_body");
let device = JSON.parse(localStorage.getItem("device"));
console.log(device);

device.forEach((devices) => {
  let task = `
<tr id="${devices.id}">
<td class="text-center"><div class="cart-image">
<img style="width: 104px;" src="${devices.src}" alt="">
</div></td>
 <td class="text-left">${devices.title}</td>
<td class="text-left"><span class="me-2">Product</span>${devices.id}</td>
 <td class="text-left"><div class="d-flex"  style="max-width: 200px;">
 <input type="text" value="${
   devices.count
 }" size="1" class="form-control" style="height: 33px;" >
        <span class="input-group-btn">
       <div class="buttons m-0 p-0">
       <p class="first"><i class="fa fa-refresh"></i></p>
       <p class="second"><i class="fa fa-times-circle"></i></p>

       </div>

        </span></div></td>
    <td class="text-right unit-price">${devices.price}€</td>
    <td class="text-right total-price">${
      parseInt(devices.price) * devices.count
    }€</td>
</tr>
`;
  trparent.innerHTML += task;
});

let delbtn = document.querySelectorAll(".fa-times-circle");

delbtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    let tr =
      this.parentElement.parentElement.parentElement.parentElement.parentElement
        .parentElement;
    console.log(tr);
    let id = tr.getAttribute("id");
    device = device.filter((devce) => devce.id != id);
    tr.remove();
    ShowTotalVat(device);
    ShowTotalPrice(device);
    ShowProductCount(device);
    ShowTotalEco(device);
    ShowTotalSub(device);
    localStorage.setItem("device", JSON.stringify(device));
    SearchLenght();
  });
});

$(".cart_info_faq_title").click(function () {
  $(this).next().slideToggle();
  $(".cart_info_").not($(this).next()).slideUp();
});

let section_cart = document.getElementById("carts");
let empty = document.getElementById("empty");
let accordion = document.getElementById("accordions");

if (!device || device.length <= 0) {
  accordion.style.display = "none";
  section_cart.style.display = "none";
  empty.classList.remove("passiv");
} else {
  accordion.style.display = "block";
  section_cart.style.display = "block";
  empty.classList.add("passiv");
}
SearchLenght();
function SearchLenght() {
  if (trparent.children.length == 0) {
    accordion.style.display = "none";
    section_cart.style.display = "none";
    empty.classList.remove("passiv");
  } else {
    accordion.style.display = "block";
    section_cart.style.display = "block";
    empty.classList.add("passiv");
  }
}

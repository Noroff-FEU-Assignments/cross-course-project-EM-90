import { jacketArray } from "./constants/productList.js";
const jacketContainer = document.querySelector(".products");
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
let cartArray = [];

jacketArray.forEach(function (jacket) {
  jacketContainer.innerHTML += `
                                <div class="product">
                                  <div style="background-image: url(${jacket.image})" class="product-image")></div>
                                  <div class="product-info">
                                   <h2>${jacket.name}</h2>
                                   <h4>${jacket.description}</h4>
                                   <ul class="product-info-list">
                                     <li>Waterproof and wind resistant</li>
                                     <li>Good for medium and long trips</li>
                                     <li>Green product, made of recycled fabric</li>
                                     <li>Multiple pockets for more carrying space</li>
                                     <li>High quality zipper (waterproof YKK)</li>
                                   </ul>
                                   <div class="jacket-price">${jacket.price}</div>
                                   <button class="jacket-btn" data-jacket="${jacket.id}">Add to cart</button>
                                  <div>
                                </div>
                                `;
});

const buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
  button.onclick = function (event) {
    //cartArray.push(event.target.dataset.jacket);
    const addItem = jacketArray.find(
      (item) => item.id === event.target.dataset.jacket
    );
    cartArray.push(addItem);
    showCart(cartArray);
    localStorage.setItem("cartList", JSON.stringify(cartArray));
  };
});

function showCart(cartItems) {
  cart.style.display = "block";
  cartList.innerHTML = "";
  let total = 0;
  cartItems.forEach(function (cartElement) {
    total += cartElement.price;
    cartList.innerHTML += `
    <div class="cart-items">
      <h4>${cartElement.name}</h4>
      <div style="background-image: url(${cartElement.image})" class="cart-image")></div>
    </div>

    `;
  });
  totalContainer.innerHTML = `Total ${total}`;
}

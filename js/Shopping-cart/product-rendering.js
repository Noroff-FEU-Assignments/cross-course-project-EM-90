import { product } from "./Product.js";
console.log(product);

const productContainer = document.querySelector(".products");

product.forEach(function (product) {
  productContainer.innerHTML += `
                                  <div class="product">
                                    <img class="cart-image" src="${product.image}" alt="${product.name}">
                                    <h2>${product.name}</h2>
                                    <div class="product-price">${product.price}</div>
                                    <button class="product-button">Add to cart</button>
                                  </div>
                                  `;
});

const buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
  buttons.onclick = function (event) {
    console.log(event.target);
  };
});

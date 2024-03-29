const State = require("./States/State.js");

/* CONFIG */
const apiUrl =
  "https://emdevelopment.no/rainydays-product-lists/wp-json/wc/v3/products?consumer_key=ck_b86c196135fa5b41b37a700f48a7baef4a2c7cfe&consumer_secret=cs_5f525210a7deb0bc1e661148dadfc1bad899c4bf";
const products = document.querySelector(".card-container");
let productList = "";

/* Methods */

/* INITIALIZE */
async function getProducts() {
  const getUrl = await fetch(apiUrl);

  const apiResult = await getUrl.json();

  const apiData = await apiResult;

  console.log(apiResult);

  apiData.forEach((product) => {
    console.log(product);

    productList += ` 
<section class="card-container-header">
 <div class="card-container">
   <div class="card">
   <a href="jacket-page.html?id=${product.id}">
        <img class="image"
        ${product.images}
        />

     <h3>${product.name}</h3>
     <p>${product.short_description}</p>
     <p class="price">${product.price},-</p>
   </a>
   </div>
   </div>
</section>
 `;

    products.innerHTML = productList;
  });
}

getProducts();

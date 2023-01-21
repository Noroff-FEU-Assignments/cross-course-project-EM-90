// const State = require("./States/State.js");

/* CONFIG */
const apiUrl =
  "https://emdevelopment.no/rainydays-product-lists/wp-json/wc/v3/products?consumer_key=ck_b86c196135fa5b41b37a700f48a7baef4a2c7cfe&consumer_secret=cs_5f525210a7deb0bc1e661148dadfc1bad899c4bf";
// const products = document.querySelector(".card-container");
let productList = "";

/* Methods */
const FetchData = async (url) => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Something went wrong fetching products...", error);
  }
};

const ProcessData = (data) => {
  data.forEach((element) => {
    State.products.push({});
  });
};

/* INITIALIZE */
const OnMounted = async () => {
  const data = await FetchData(apiUrl);

  console.log("Data Testing ", data);
  /*
  ProcessData(data);
  */
  /*
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
  */
};

OnMounted();

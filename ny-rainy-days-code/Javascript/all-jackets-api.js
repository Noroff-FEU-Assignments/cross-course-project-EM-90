const apiUrl =
  "https://emdevelopment.no/rainydays-product-lists/wp-json/wc/v3/products?consumer_key=ck_b86c196135fa5b41b37a700f48a7baef4a2c7cfe&consumer_secret=cs_5f525210a7deb0bc1e661148dadfc1bad899c4bf";

const products = document.querySelector(".container");
let productList = "";

async function getProducts() {
  const getUrl = await fetch(apiUrl);

  const apiResult = await getUrl.json();

  const apiData = await apiResult;

  console.log(apiResult);

  apiData.forEach((product) => {
    console.log(product);

    productList += `<div class="card-container">
  <div class="card">
  <a href="jacket-page.html">
    <h3>${product.name}</h3>
    <p>${product.short_description}</p>
    <p class="price">${product.price}</p>
  </a>
  </div>
  </div>
`;

    products.innerHTML = productList;
  });
}

getProducts();

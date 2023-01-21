const details = document.querySelector(".jacket-grid");
const string = document.location.search;

const params = new URLSearchParams(string);

const id = params.get("id");
console.log(id);
const apiUrl =
  "https://emdevelopment.no/rainydays-product-lists/wp-json/wc/v3/products?consumer_key=ck_b86c196135fa5b41b37a700f48a7baef4a2c7cfe&consumer_secret=cs_5f525210a7deb0bc1e661148dadfc1bad899c4bf" +
  id;

async function getDetails() {
  try {
    const result = await fetch(apiUrl);
    const details = await result.json();
    console.log(details);
  } catch (error) {
    console.log(error);
  }
}

getDetails();

function getJacket(jacket) {
  console.log(jacket);
  details.innerHTML = `<div class="product">
    <div style="background-image: url("${jacket.images[0].src}")" class="product-image")></div>
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
`;
}

getJacket(jacket);

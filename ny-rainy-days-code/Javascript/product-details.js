/* METHOD */
const GetProductIdFromParams = () => {
  const params = new URLSearchParams(document.location.search);
  return parseInt(params.get("id"));
};

async function FetchProductInfoFromApi(productId) {
  const URL = `https://emdevelopment.no/rainydays-product-lists/wp-json/wc/v3/products/${productId}?consumer_key=ck_b86c196135fa5b41b37a700f48a7baef4a2c7cfe&consumer_secret=cs_5f525210a7deb0bc1e661148dadfc1bad899c4bf`;
  try {
    const response = await fetch(URL);
    const data = await result.json();
    return data;
  } catch (error) {
    console.log("Something went wrong fetching ProductInfo", error);
  }
}

function RenderJacketToTheDom(item) {
  const details = document.querySelector(".jacket-grid");
  details.innerHTML = `<div class="product">
    <div style="background-image: url('${item.images[0].src}');" class="product-image")></div>
    <div class="product-info">
     <h2>${item.name}</h2>
     <h4>${item.description}</h4>
     <ul class="product-info-list">
       <li>Waterproof and wind resistant</li>
       <li>Good for medium and long trips</li>
       <li>Green product, made of recycled fabric</li>
       <li>Multiple pockets for more carrying space</li>
       <li>High quality zipper (waterproof YKK)</li>
     </ul>
     <div class="jacket-price">${item.price}</div>
`;
}

const OnMounted = async () => {
  const product = await FetchProductInfoFromApi(productId);
  RenderJacketToTheDom(product);
};

/* INITIALIZE */
const productId = GetProductIdFromParams();

if (productId > 0) {
  OnMounted();
}

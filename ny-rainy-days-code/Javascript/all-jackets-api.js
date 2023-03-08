/* CONFIG */
const apiUrl =
  "https://emdevelopment.no/rainydays-product-lists/wp-json/wc/v3/products?consumer_key=ck_b86c196135fa5b41b37a700f48a7baef4a2c7cfe&consumer_secret=cs_5f525210a7deb0bc1e661148dadfc1bad899c4bf";
// const products = document.querySelector(".card-container");
const products = document.querySelector(".card-container");
let productList = "";
const State = {
  products: [],
};

/* Methods */
const FetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Something went wrong fetching products...", error);
  }
};

const ProcessData = async (data) => {
  for await (const product of data) {
    State.products.push({
      id: product.id,
      name: product.name,
      status: product.status,
      description: product.description,
      short_description: product.short_description,
      price: product.price,
      images: product.images,
    });
  }
};

const PasteProductsToTheDom = () => {
  // foreach product, create a card element in the DOM
  State.products.forEach((product) => {
    productList += ` 
      <section class="card-container-header">
      <div class="card-container">
        <div class="card">
        <a href="jacket-page.html?id=${product.id}">
              <img class="image"
              src="${product.images[0].src}"/>
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
};

const OnMounted = async () => {
  const data = await FetchData(apiUrl);
  console.log("Fetched Data ", data);
  await ProcessData(data);
  PasteProductsToTheDom();
};

/* INITIALIZE */
OnMounted();

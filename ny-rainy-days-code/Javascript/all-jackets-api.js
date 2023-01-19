import { apiUrl } from "./constants/api";
import { consumer_key_secret } from "./constants/api";

const products = document.querySelector(".container");
let productList = "";

async function getProducts() {
  //try{
  const validation = {
    method: "GET",
    consumer_key_secret,
    dataType: "json",
  };

  const getUrl = await fetch(apiUrl, validation);

  const apiResult = await getUrl.json();

  const apiData = await apiResult.data;

  console.log(apiResult);

  apiData.forEach((product) => {
    console.log(product);
  });
  //}
}

getProducts();

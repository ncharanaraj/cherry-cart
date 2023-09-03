import axios from "axios";

const baseURL = "https://fakestoreapi.com/products";

const getProducts = async () => await axios.get(baseURL);

const getProductId = async (productId) =>
  await axios.get(baseURL + `/${productId}`);

const getProductCategories = async () =>
  await axios.get(baseURL + "/categories");

export { getProducts, getProductId, getProductCategories };

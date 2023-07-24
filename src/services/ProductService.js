import axios from "axios";

const getProducts = async () =>
  await axios.get("https://fakestoreapi.com/products");

const getProductId = async (productId) =>
  await axios.get(`https://fakestoreapi.com/products/${productId}`);

const getProductCategories = async () =>
  await axios.get("https://fakestoreapi.com/products/categories");

export { getProducts, getProductId, getProductCategories };

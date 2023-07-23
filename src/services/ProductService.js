import axios from "axios";

const getProducts = async () =>
  await axios.get("https://fakestoreapi.com/products");

const getProductId = async (productId) =>
  await axios.get(`https://fakestoreapi.com/products/${productId}`);

export { getProducts, getProductId };

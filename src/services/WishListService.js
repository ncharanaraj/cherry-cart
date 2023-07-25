import axios from "axios";

const getWishlistService = async () =>
  await axios.get("https://fakestoreapi.com/products");

const addToWishlistService = async (product) =>
  await axios.post("https://fakestoreapi.com/products", { product });

export { getWishlistService, addToWishlistService };

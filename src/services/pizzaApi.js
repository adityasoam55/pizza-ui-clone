import axios from "axios";

export const getPizzas = async () => {
  const response = await axios.get("/.netlify/functions/pizzas");

  return response.data.data;
};

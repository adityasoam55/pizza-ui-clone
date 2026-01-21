import axios from "axios";

export const getPizzas = async () => {
  const response = await aaxios.get("/.netlify/functions/pizzas");

  return response.data.data;
};

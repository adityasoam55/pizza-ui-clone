import axios from "axios";

export const getPizzas = async () => {
  const response = await axios.get(
    "https://api.hothousenorthwood.co.uk/api/v1/pizza"
  );
  return response.data.data;
};

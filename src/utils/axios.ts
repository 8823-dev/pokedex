import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
});

export default apiClient;

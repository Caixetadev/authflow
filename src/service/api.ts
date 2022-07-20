import axios from "axios";

export const apiBackend = axios.create({
  baseURL: "https://api-anime-cax.herokuapp.com/",
});

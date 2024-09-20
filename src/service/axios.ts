import axios from "axios";

const getApiInfo = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

export { getApiInfo };
import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

export {api}
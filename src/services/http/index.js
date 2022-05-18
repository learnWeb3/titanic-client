import axios from "axios";

export const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 2500,
  headers: {
    "Content-type": "application/json",
  },
});

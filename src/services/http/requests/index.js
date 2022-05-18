import { http } from "../index";

export const register = async (
  data = {
    email: null,
    password: null,
  }
) => {
  return await http.post("/users", data);
};

export const login = async (
  data = {
    email: null,
    password: null,
  }
) => {
  return await http.post("/sessions", data);
};

export const fetchPassengers = async (token) => {
  return await http.get("/passengers", {
    headers: `Authorization: Bearer ${token}`,
  });
};

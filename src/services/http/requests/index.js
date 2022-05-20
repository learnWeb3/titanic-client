import { http } from "../index";
import queryString from "query-string";

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
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const fetchStats = async (token, queryParams = {}) => {
  const _queryString = queryString.stringify(queryParams);
  const uri = !_queryString
    ? "/passengers/stats"
    : `/passengers/stats?${_queryString}`;
  return await http.get(uri, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const estimateSurvival = async (body = {}, token) => {
  return await http.post(`/passengers/survival`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

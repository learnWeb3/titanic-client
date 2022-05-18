import Cookies from "js-cookie";

export const isUserLoggedIn = () => {
  return Cookies.get(process.env.REACT_APP_CURRENT_USER_COOKIE_NAME)
    ? true
    : false;
};

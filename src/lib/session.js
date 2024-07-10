import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const setSessionCookie = (token) => {
  if (token) {
    const decodedToken = jwtDecode(token);
    const role = decodedToken["custom:role"];
    console.log(role);
    Cookies.set("session", token, { expires: 1 / 24 });
    Cookies.set("logged-in", true, { expires: 1 / 24 });
    Cookies.set("role", role, { expires: 1 / 24 });
  }
};

export const removeSession = () => {
  Cookies.remove("session");
  Cookies.remove("logged-in");
  Cookies.remove("role");
};

export const getSession = () => {
  return Cookies.get("session");
};

export const getRole = () => {
  const token = getSession();
  if (token) {
    const decodedToken = jwtDecode(token);
    const role = decodedToken["custom:role"];
    return role;
  }
  return null;
};

export const isLoggedIn = () => {
  return Cookies.get("logged-in") === "true";
};

export const checkAlreadyLoggedIn = () => {
  return isLoggedIn() && getSession() !== undefined;
};

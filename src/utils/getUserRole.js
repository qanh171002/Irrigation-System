import { jwtDecode } from "jwt-decode";

export function getUserRole() {
  const token = localStorage.getItem("access_token");
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded?.role || null;
  } catch (error) {
    console.error("Fail to decode", error);
    return null;
  }
}

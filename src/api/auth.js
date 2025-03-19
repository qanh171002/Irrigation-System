// const API_URL = "https://irrigation-system-be.onrender.com";
import { BASE_URL } from "../utils/constants";
export const login = async (email, password) => {
  try {
    const res = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      let errorMessage = "Login failed";
      try {
        const errorData = await res.json();
        errorMessage = errorData.message || errorMessage;
      } catch (e) {
        console.warn("Error parsing JSON response:", e.message);
      }
      throw new Error(errorMessage);
    }

    const data = await res.json();
    const { access_token, refresh_token } = data.result;
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
    return data;
  } catch (error) {
    console.error("Login error:", error.message);
    throw error;
  }
};

export const signup = async (email, password, username, role = "USER") => {
  try {
    const res = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password, username, role }),
    });

    if (!res.ok) {
      let errorMessage = "Signup failed";
      try {
        const errorData = await res.json();
        errorMessage = errorData.message || errorMessage;
      } catch (e) {
        console.warn("Error parsing JSON response:", e.message);
      }
      throw new Error(errorMessage);
    }

    const data = await res.json();
    const { access_token, refresh_token } = data.result;
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
    return data;
  } catch (error) {
    console.error("Signup error:", error.message);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};

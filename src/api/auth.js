const API_URL = "https://irrigation-system-be.onrender.com";

export const login = async (email, password) => {
  try {
    const res = await fetch(`${API_URL}/users/login`, {
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

export const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};

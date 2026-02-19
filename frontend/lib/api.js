const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://global-civic-ai-backend.onrender.com";

class APIClient {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const token = typeof window !== "undefined" ? localStorage.getItem("access_token") : null;
    const config = {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers,
      },
    };
    const response = await fetch(url, config);
    const data = await response.json();
    return data;
  }
  async signup(userData) {
    return this.request("/auth/register", { method: "POST", body: JSON.stringify(userData) });
  }
  async login(credentials) {
    const data = await this.request("/auth/login", { method: "POST", body: JSON.stringify(credentials) });
    if (data.access_token) localStorage.setItem("access_token", data.access_token);
    return data;
  }
  async logout() { localStorage.removeItem("access_token"); }
  async getCurrentUser() { return this.request("/users/me"); }
}

export const api = new APIClient();

export async function loginUser(credentials) { return api.login(credentials); }
export async function registerUser(userData) { return api.signup(userData); }
export async function getCurrentUser(token) {
  const response = await fetch(`${API_BASE_URL}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
}

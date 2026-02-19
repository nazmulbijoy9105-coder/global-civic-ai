const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://global-civic-ai-backend.onrender.com";

export const api = {
  post: async (endpoint, data) => {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  },
  get: async (endpoint, token) => {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    return res.json();
  },
};
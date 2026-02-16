const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://global-civic-ai-backend.onrender.com";

// Health check
export async function getHealth() {
  const res = await fetch(`${API_BASE}/health`);
  return res.json();
}

// Login
export async function loginUser(credentials) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return res.json();
}

// Register
export async function registerUser(data) {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// Current user
export async function getCurrentUser(token) {
  const res = await fetch(`${API_BASE}/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

// Questions
export async function getQuestions(token) {
  const res = await fetch(`${API_BASE}/questions`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

// Submit response
export async function submitResponse(data, token) {
  const res = await fetch(`${API_BASE}/questions/respond`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
}

// Payment
export async function createPayment(data, token) {
  const res = await fetch(`${API_BASE}/payments/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
}

// Payment history
export async function getPaymentHistory(userId, token) {
  const res = await fetch(`${API_BASE}/payments/history/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

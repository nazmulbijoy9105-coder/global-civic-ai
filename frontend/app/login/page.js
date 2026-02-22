"use client";
import { useState } from "react";
import { loginUser } from "../../lib/api";

export default function LoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await loginUser(formData);
      if (result.access_token) {
        localStorage.setItem("token", result.access_token);
        setMessage("Login successful! Redirecting...");
        setTimeout(() => (window.location.href = "/dashboard"), 1000);
      } else {
        setMessage("Error: " + (result.detail || "Login failed"));
      }
    } catch (err) {
      setMessage("Error: Could not connect to server");
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 400, margin: "80px auto", padding: 24 }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
            autoComplete="username"   // ✅ added
            style={{ width: "100%", padding: 10, marginBottom: 10 }}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
            autoComplete="current-password"   // ✅ added
            style={{ width: "100%", padding: 10 }}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: 12,
            background: "#7C3AED",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p style={{ marginTop: 16 }}>
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
      {message && (
        <p
          style={{
            marginTop: 12,
            color: message.includes("Error") ? "red" : "green",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}
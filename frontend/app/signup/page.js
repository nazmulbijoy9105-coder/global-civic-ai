"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../../lib/api";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await api.signup(formData);
      router.push("/login");
    } catch (err) {
      setError(err.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 420,
        margin: "40px auto",
        background: "#fff",
        borderRadius: 20,
        padding: "48px 40px",
        boxShadow: "0 4px 40px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 6, color: "#0A1628" }}>
        Create Account
      </h2>
      <p style={{ fontSize: 16, color: "#555", marginBottom: 20 }}>
        Welcome! Please fill in your details below.
      </p>
      {error && (
        <p style={{ color: "red", marginBottom: 12, fontSize: 14 }}>{error}</p>
      )}
      <form onSubmit={handleSubmit}>
        <label style={{ display: "block", marginBottom: 12 }}>
          Username
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            autoComplete="username"   // ✅ added
            style={{
              width: "100%",
              padding: "10px",
              marginTop: 6,
              borderRadius: 8,
              border: "1px solid #ccc",
            }}
          />
        </label>
        <label style={{ display: "block", marginBottom: 12 }}>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"   // ✅ added
            style={{
              width: "100%",
              padding: "10px",
              marginTop: 6,
              borderRadius: 8,
              border: "1px solid #ccc",
            }}
          />
        </label>
        <label style={{ display: "block", marginBottom: 20 }}>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="new-password"   // ✅ added for signup
            style={{
              width: "100%",
              padding: "10px",
              marginTop: 6,
              borderRadius: 8,
              border: "1px solid #ccc",
            }}
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            background: loading ? "#999" : "#0A1628",
            color: "#fff",
            fontWeight: 600,
            borderRadius: 8,
            border: "none",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
      <p style={{ marginTop: 16, textAlign: "center", fontSize: 14 }}>
        Already have an account? <a href="/login" style={{ color: "#0A1628" }}>Login</a>
      </p>
    </div>
  );
}
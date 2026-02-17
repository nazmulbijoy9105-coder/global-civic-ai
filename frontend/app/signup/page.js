"use client";
import React, { useState } from "react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect with backend API
    console.log("Signup data:", formData);
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
      <h2
        style={{
          fontSize: 26,
          fontWeight: 800,
          marginBottom: 6,
          color: "#0A1628",
        }}
      >
        Create Account
      </h2>

      <p
        style={{
          fontSize: 16,
          color: "#555",
          marginBottom: 20,
        }}
      >
        Welcome! Please fill in your details below.
      </p>

      <form onSubmit={handleSubmit}>
        <label style={{ display: "block", marginBottom: 12 }}>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
          style={{
            width: "100%",
            padding: "12px",
            background: "#0A1628",
            color: "#fff",
            fontWeight: 600,
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
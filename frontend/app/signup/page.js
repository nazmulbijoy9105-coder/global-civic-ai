"use client";
import { useState } from "react";
import { api } from "../../lib/api";

export default function SignupPage() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e = {};
    if (!formData.username || formData.username.length < 3) e.username = "Min 3 characters";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) e.email = "Valid email required";
    if (!formData.password || formData.password.length < 6) e.password = "Min 6 characters";
    if (formData.password !== formData.confirm) e.confirm = "Passwords do not match";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setServerError("");
    try {
      const result = await api.signup({ username: formData.username, email: formData.email, password: formData.password });
      if (result.id) {
        const loginResult = await api.login({ username: formData.username, password: formData.password });
        if (loginResult.access_token) {
          localStorage.setItem("access_token", loginResult.access_token);
          setSuccess(true);
          setTimeout(() => window.location.href = "/dashboard", 1500);
        }
      } else {
        setServerError(result.detail || "Registration failed");
      }
    } catch {
      setServerError("Could not connect to server");
    }
    setLoading(false);
  };

  if (success)
    return (
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center", minHeight:"100vh", background:"#0A1628", color:"#00C896", fontSize:24, fontFamily:"sans-serif", flexDirection:"column", gap:16 }}>
        <div style={{ fontSize:64 }}>✅</div>
        <div>Account created! Redirecting...</div>
      </div>
    );

  return (
    <div style={{ display:"flex", minHeight:"100vh", fontFamily:"sans-serif" }}>
      {/* Left side content */}
      <div style={{ flex:1, background:"linear-gradient(135deg,#0A1628,#0A2E1F)", display:"flex", alignItems:"center", justifyContent:"center", padding:48 }}>
        <div>
          <div style={{ color:"#00C896", fontSize:11, fontWeight:700, letterSpacing:"2px", marginBottom:24 }}>GLOBAL CIVIC AI</div>
          <h1 style={{ color:"#F8FAFC", fontSize:56, fontWeight:800, lineHeight:1.1, marginBottom:20 }}>
            Know Your<br/><span style={{ color:"#00C896" }}>Rights.</span>
          </h1>
          <p style={{ color:"#94A3B8", fontSize:16, lineHeight:1.7, maxWidth:360 }}>
            120+ civic and financial awareness questions. AI-powered insights for citizens worldwide.
          </p>
        </div>
      </div>

      {/* Right side content */}
      <div style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", padding:40, background:"#F8FAFC" }}>
        <div style={{ width:"100%", maxWidth:420, background:"#fff", borderRadius:20, padding:"48px 40px", boxShadow:"0 4px 40px rgba(0,0,0,0.08)" }}>
          <h2 style={{ fontSize:26, fontWeight:800, marginBottom:6, color:"#0A1628" }}>Create Account</h2>
          <p style={{ font
export default function HomePage() {
  return (
    <main style={{ maxWidth: 800, margin: "80px auto", padding: 24, textAlign: "center" }}>
      <h1 style={{ fontSize: 48, fontWeight: 900, marginBottom: 16 }}>Global Civic AI</h1>
      <p style={{ fontSize: 20, color: "#64748B", marginBottom: 40 }}>
        Your platform for civic & financial awareness — powered by AI.
      </p>
      <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
        <a href="/login" style={{ padding: "14px 32px", background: "#7C3AED", color: "#fff", borderRadius: 10, textDecoration: "none", fontWeight: 700 }}>
          Login
        </a>
        <a href="/signup" style={{ padding: "14px 32px", border: "2px solid #7C3AED", color: "#7C3AED", borderRadius: 10, textDecoration: "none", fontWeight: 700 }}>
          Sign Up
        </a>
      </div>
    </main>
  );
}

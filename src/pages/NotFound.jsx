// src/pages/NotFound.jsx
export default function NotFound() {
    return (
      <div style={{ padding: "3rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404</h1>
        <p style={{ marginBottom: "1rem" }}>
          The page you are looking for does not exist.
        </p>
        <a href="/products" style={{ color: "#1a1a1a", fontWeight: 600 }}>
          Go back to products
        </a>
      </div>
    );
  }
  

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use navigate for redirection

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {  
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include cookies
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      alert("Login successful!");
      navigate("/"); // Redirect to Dashboard after login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(rgb(152, 57, 135), rgb(43, 2, 25))",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <div
        style={{
          width: "400px",
          background: "black",
          color: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Login - SmartCrack AI</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleLogin} style={{ width: "100%" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "90%",
              padding: "12px",
              margin: "10px 0",
              border: "1px solid #555",
              borderRadius: "5px",
              background: "#222",
              color: "white",
              fontSize: "16px",
              textAlign: "center",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "90%",
              padding: "12px",
              margin: "10px 0",
              border: "1px solid #555",
              borderRadius: "5px",
              background: "#222",
              color: "white",
              fontSize: "16px",
              textAlign: "center",
            }}
          />
          <button
            type="submit"
            style={{
              width: "95%",
              padding: "12px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              marginTop: "10px",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Login
          </button>
        </form>
        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          Don't have an account? <a href="/SignupPage" style={{ color: "#00bfff", textDecoration: "none" }}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom/client";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    jeeNeet: "",
    grade: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5001/api/auth/register", {  
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      alert("Registration successful!");
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
      window.location.reload();
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
        <h2>Sign Up - SmartCrack AI</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleRegister} style={{ width: "100%" }}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <select name="jeeNeet" value={formData.jeeNeet} onChange={handleChange} required style={inputStyle}>
            <option value="">Select Exam</option>
            <option value="JEE">JEE</option>
            <option value="NEET">NEET</option>
          </select>
          <select name="grade" value={formData.grade} onChange={handleChange} required style={inputStyle}>
            <option value="">Select Grade</option>
            <option value="11">11th</option>
            <option value="12">12th</option>
          </select>
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Register
          </button>
        </form>
        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          Already have an account? <a href="/LoginPage" style={{ color: "#00bfff", textDecoration: "none" }}>Login</a>
        </p>
      </div>
    </div>
  );
};

// Common styles for input and select fields
const inputStyle = {
  width: "90%",
  padding: "12px",
  margin: "10px 0",
  border: "1px solid #555",
  borderRadius: "5px",
  background: "#222",
  color: "white",
  fontSize: "16px",
  textAlign: "center",
};

// Button style with hover effect
const buttonStyle = {
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
};

export default SignupPage;

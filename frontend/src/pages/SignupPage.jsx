import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const SignupPage = () => {

  const navigate = useNavigate(); // ✅ Initialize navigate
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    studentClass: "",
    exam: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
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
      // Redirect to dashboard after successful signup
      navigate("/");

      // Reload to fetch authentication state
      window.location.reload();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleRegister}>
        <h2 className="text-xl font-semibold mb-4">Register</h2>
        {error && <p className="text-red-500">{error}</p>}
        {Object.keys(formData).map((field) => (
          <input
            key={field}
            type={field === "password" ? "password" : "text"}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field]}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            required
          />
        ))}
        <button type="submit" className="bg-green-500 text-white w-full p-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}

export default SignupPage

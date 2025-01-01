import React, { useState } from "react";
import { signup } from "../services/authService";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData);
      alert("Signup successful! Please login.");
    } catch (error) {
      console.error("Signup failed:", error.response.data.message);
    }
  };

  return (
    <div className="container flex  items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-black p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-center mb-4">Signup</h2>
        <div className="mb-3">
          <input
            name="name"
            onChange={handleChange}
            placeholder="Name"
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            name="email"
            onChange={handleChange}
            placeholder="Email"
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;

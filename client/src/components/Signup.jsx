import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login,verifyToken,signup } from "../services/authService";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      setLoading(false);
      return;
    }
    if (formData.password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }

    try {
      await signup(formData);
      alert("Signup successful!");
      navigate("/login");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Signup failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-black p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-center mb-4 text-white">Signup</h2>
        {errorMessage && <p className="text-red-500 mb-3">{errorMessage}</p>}
        <div className="mb-3">
          <label htmlFor="name" className="block text-gray-400 mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            onChange={handleChange}
            placeholder="Name"
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block text-gray-400 mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            onChange={handleChange}
            placeholder="Email"
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="block text-gray-400 mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
            required
            className="form-control"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Signup"}
        </button>
      </form>
    </div>
  );
};

export default Signup;

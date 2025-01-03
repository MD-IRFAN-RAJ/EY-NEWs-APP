import React, { useState } from "react";
import PropTypes from "prop-types";
import { login ,verifyToken} from "../services/authService";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For showing errors

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const { data } = await login({ email, password }); // Send plaintext password
    console.log("Login successful:", data); // Debugging
    setToken(data.token);
    localStorage.setItem("token", data.token);
    window.location.href = "/home"; // Redirect to home page
  } catch (error) {
    console.error(
      "Login failed:",
      error.response?.data?.message || "Unknown error"
    );
    setError(error.response?.data?.message || "Login failed.");
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-black p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Login
        </h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}{" "}
        {/* Show error if login fails */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="w-full p-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;

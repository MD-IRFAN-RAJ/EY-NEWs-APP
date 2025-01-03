import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AllNews from "./components/AllNews";
import Footer from "./components/Footer";
import TopHeadlines from "./components/TopHeadlines";
import Search from "./components/Search";
import HomePage from "../src/components/MainPage/MainPage";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryNews from "./components/CountryNews";
import Login from "../src/components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div className="w-full">
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route
            path="/home"
            element={
              <ProtectedRoute token={token}>
                <Header />
                <Search />
                <AllNews />
              </ProtectedRoute>
            }
          />
          <Route
            path="/top-headlines/:category"
            element={
              <ProtectedRoute token={token}>
                <Header />
                <Search />
                <TopHeadlines />
              </ProtectedRoute>
            }
          />
          <Route
            path="/country/:iso"
            element={
              <ProtectedRoute token={token}>
                <Header />
                <Search />
                <CountryNews />
              </ProtectedRoute>
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ token, children, redirectPath = "/" }) => {
  if (!token) {
    console.log("Access denied: No token provided.");
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

ProtectedRoute.propTypes = {
  token: PropTypes.string,
  children: PropTypes.node.isRequired,
  redirectPath: PropTypes.string,
};

export default ProtectedRoute;

import React from 'react';
import PropTypes from 'prop-types'; 
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ token, children }) => {
  return token ? children : <Navigate to="/login" />;
};

// Define prop types for validation
ProtectedRoute.propTypes = {
  token: PropTypes.string, // `token` should be a string (can be null or undefined)
  children: PropTypes.node.isRequired, // `children` is required and must be a React node
};

export default ProtectedRoute;

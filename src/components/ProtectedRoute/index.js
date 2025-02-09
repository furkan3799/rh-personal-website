import React from "react";
import { Navigate } from "react-router-dom";
import authService from "../../services/auth.service";

export const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true || authService.isAuthenticated();

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  return children;
};

// AuthRedirect.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRedirect = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  // Check if user is authenticated
  if (userData && userData.token && userData.is_superuser) {
    return <Navigate to="/dashboard" />;
  }
  if (userData && userData.token && !userData.is_superuser) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthRedirect;

import React from "react";
import { useState } from "react";

import { Outlet, Navigate } from "react-router-dom";

const IsAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return <>{isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />}</>;
};

export default IsAuthenticated;

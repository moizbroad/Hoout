import React, { Fragment } from "react";
import Routes from "./Routes";
import { AuthProvider } from "./providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <AuthProvider>
      <Routes />
      <ToastContainer position="bottom-center" />
    </AuthProvider>
  );
}

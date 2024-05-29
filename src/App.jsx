import React, { Fragment } from "react";
import Routes from "./Routes";
import { AuthProvider } from "./providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Routes />
        <ToastContainer position="bottom-right" />
      </AuthProvider>
    </Provider>
  );
}

import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
// import { Loader2 } from "../components";

export function PrivateRoute() {
  // const authState = useSelector((state) => state.auth);
  // const isLoading = authState.isLoading;
  // const isAuthenticated = authState.isLoggedIn;
  // const role = authState.user?.roleName;

  // if (isLoading) {
  //   return <Loader2 />;
  // }

  // if (!isAuthenticated) {
  //   return <Navigate to="/sign-in" replace />;
  // }

  // if (role !== "Guest") {
  //   return <Navigate to="/" replace />;
  // }

  return <Outlet />;
}

export function ProtectedRoute() {
  // const authState = useSelector((state) => state.auth);
  // const isLoading = authState.isLoading;
  // const isAuthenticated = authState.isLoggedIn;
  // const role = authState.user?.roleName;

  // if (isLoading) {
  //   return <Loader2 />;
  // } else if (isAuthenticated && role == "Guest") {
  //   return <Navigate to="/dashboard" replace />;
  // } else {
  //   return <Outlet />;
  // }
}

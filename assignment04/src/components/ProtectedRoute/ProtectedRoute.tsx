import { JSX } from "react";
import { Navigate } from "react-router-dom";
import { LOCAL_STORAGE_KEYS, ROUTES } from "../../Constants/APP_CONSTANTS";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isLoggedIn =
    localStorage.getItem(LOCAL_STORAGE_KEYS.IS_LOGGED_IN) === "true";
  return isLoggedIn ? children : <Navigate to={ROUTES.LOGIN} />;
};

export default ProtectedRoute;

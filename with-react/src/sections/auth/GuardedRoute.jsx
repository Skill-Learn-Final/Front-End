import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const GuardedRoute = ({ isAllowed, redirectTo, children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};

export default GuardedRoute;

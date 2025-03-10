import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, role }) => {
  const User_Role = useSelector((state) => state?.auth?.userRole);
  // if (!mockAuth.isAuthenticated) {
  //   return <Navigate to="/login" />;
  // }
  if (User_Role !== role) {
    return <Navigate to="/" />;
  }

  return children;
};

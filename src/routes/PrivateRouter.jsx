import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user } = use(AuthContext);
  const location = useLocation();

  if (!user) {
    return (
      <Navigate to="/sign-in" state={location?.pathname} replace></Navigate>
    );
  }

  if (!user.emailVerified) {
    return (
      <Navigate to="/sign-in" state={location?.pathname} replace></Navigate>
    );
  }

  return children;
};

export default PrivateRouter;

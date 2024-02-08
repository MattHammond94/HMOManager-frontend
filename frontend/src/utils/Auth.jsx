import { Navigate } from "react-router-dom";

const Auth = ({ children }) => {
  if (localStorage.getItem("authToken")) {
    return children;
  }

  return <Navigate to="/" />;
}

export default Auth
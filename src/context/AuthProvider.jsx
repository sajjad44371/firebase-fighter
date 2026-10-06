import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  // create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const info = {
    createUser,
  };

  return (
    <>
      <AuthContext value={info}>{children}</AuthContext>
    </>
  );
};

export default AuthProvider;

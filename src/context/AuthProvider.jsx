import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  // create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // set an observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("user:", currentUser);
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, []);

  // sign out user
  const signOutUser = () => {
    return signOut(auth);
  };

  const info = {
    createUser,
    signIn,
    signInWithGoogle,
    user,
    setUser,
    signOutUser,
  };

  return (
    <>
      <AuthContext value={info}>{children}</AuthContext>
    </>
  );
};

export default AuthProvider;

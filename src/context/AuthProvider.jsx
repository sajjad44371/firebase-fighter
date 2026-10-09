import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
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
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUserProfile = (user, info) => {
    setLoading(true);
    return updateProfile(user, info);
  };

  // email verification
  const emailVerification = (user) => {
    setLoading(true);
    return sendEmailVerification(user);
  };

  // sign in user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // set an observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("user:", currentUser);
        setUser(currentUser);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  // sign out user
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const info = {
    createUser,
    signIn,
    updateUserProfile,
    emailVerification,
    signInWithGoogle,
    user,
    setUser,
    signOutUser,
    loading,
    setLoading,
  };

  return (
    <>
      <AuthContext value={info}>{children}</AuthContext>
    </>
  );
};

export default AuthProvider;

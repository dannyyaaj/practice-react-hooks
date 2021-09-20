/* eslint-disable no-unused-vars */
import { useEffect, useCallback, useState } from 'react';
import {
  signOut, getAuth, onAuthStateChanged, signInWithPopup, GithubAuthProvider,
} from 'firebase/auth';
import firebase from './firebase';

function useFirebaseAuth() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (newUser) => {
      if (newUser) {
        // User is signed in.
        setUser(newUser);
      } else {
        // No user is signed in.
        setUser(null);
      }
    });
  }, []);

  const login = useCallback(async () => {
    // const provider = new firebase.auth.GithubAuthProvider();
    const provider = new GithubAuthProvider();

    try {
      const auth = getAuth();
      const result = await signInWithPopup(auth, provider);
      console.log(result, 'results');
      setUser(result.user);
    } catch (error) {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // // The email of the user's account used.
      // const { email } = error;
      // // The AuthCredential type that was used.
      // const credential = GithubAuthProvider.credentialFromError(error);
      console.log(error.message, 'error in login');
    }
  }, []);

  const logout = useCallback(
    () => {
      const auth = getAuth();
      auth.signOut();
      console.log('logging out user');
    },
    [],
  );

  return {
    user,
    login,
    logout,
  };
}

export default useFirebaseAuth;

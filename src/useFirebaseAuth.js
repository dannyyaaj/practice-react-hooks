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
    const provider = new GithubAuthProvider();

    try {
      const auth = getAuth();
      const result = await signInWithPopup(auth, provider);

      setUser(result.user);
    } catch (error) {
      console.log(error.code, error.message, 'error in login');
    }
  }, []);

  const logout = useCallback(
    () => {
      const auth = getAuth();
      auth.signOut();
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

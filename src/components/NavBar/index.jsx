import React from "react";

import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <>
      <nav>
        <h1>React Chat</h1>
        {user ? (
          <button onClick={signOut} type="button">
            Sign Out
          </button>
        ) : (
          <button onClick={googleSignIn} type="button">
            Google
          </button>
        )}
      </nav>
    </>
  );
};

export default NavBar;

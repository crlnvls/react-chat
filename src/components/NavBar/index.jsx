import React, { useState } from "react";

import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const NavBar = () => {
  // const [user, setUser] = useState(false);
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    // setUser(true);
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const signOut = () => {
    // setUser(false);
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

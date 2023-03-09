import React from "react";

import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <>
      <h2>Welcome to React Chat</h2>
      <p>Sign with Google or GitHub</p>
      <button onClick={googleSignIn}>Google</button>
    </>
  );
};

export default Welcome;

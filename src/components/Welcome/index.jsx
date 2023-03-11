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
      <h2 className="text-left text-base text-primary">React Live Chat</h2>
      <div className="py-32 text-center">
        <h2 className="font-extrabold text-4xl">Navbars in Tailwind!</h2>
      </div>

      <button onClick={googleSignIn}>Google</button>
    </>
  );
};

export default Welcome;

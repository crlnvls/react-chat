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
      <div className="md:flex justify-center md:ml-12">
        <div className="py-10 text-center md:py-40 md:text-left">
          <h2 className="text-5xl">Live Chat</h2>
          <h2 className="text-base md:text-5xl mb-3 ">Built with React</h2>
          <p className="text-2xl mb-3">
            Using Google Authentication and{" "}
            <span className="md:block">Cloud Firestore</span>
          </p>
          <button>
            <img
              src="./btn.png"
              alt="Google Button"
              onClick={googleSignIn}
              type="button"
              className=" hover:bg-secondary "
            />
          </button>
        </div>
        <div className="sm:ml-16 md:py-16">
          <img src="./chat.png" alt="Phone Illustration" className="chat" />
        </div>
      </div>
    </>
  );
};

export default Welcome;

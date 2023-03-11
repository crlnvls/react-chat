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
      <nav className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <a
                  href="#"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <img
                    src="./logo.png"
                    alt="Message Icon"
                    className="h-12 w-12 mr-1"
                  />

                  <span className="font-bold">React Chat</span>
                </a>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  About
                </a>
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Pricing
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              {user ? (
                <button className="py-5 px-3" onClick={signOut} type="button">
                  Logout
                </button>
              ) : (
                <button
                  className="py-5 px-3"
                  onClick={googleSignIn}
                  type="button"
                >
                  Login
                </button>
              )}

              {user ? (
                <button className="hidden" type="button"></button>
              ) : (
                <button
                  className="py-2 px-3 bg-secondary hover:bg-tertiary rounded transition duration-300 text-primary"
                  onClick={googleSignIn}
                  type="button"
                >
                  Sign in
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

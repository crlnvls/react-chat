import React from "react";

const Welcome = () => {
  const googleSignIn = () => {};

  return (
    <>
      <h2>Welcome to Reach Chat</h2>
      <p>Sign with Google or GitHub</p>
      <button onClick={googleSignIn}>Google</button>
    </>
  );
};

export default Welcome;

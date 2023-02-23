import React from "react";

const NavBar = () => {
  const [user, setUser] = useState(false);

  const googleSignIn = () => {
    setUser(true);
  };

  const signOut = () => {
    setUser(false);
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

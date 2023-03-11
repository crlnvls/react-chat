import React from "react";

import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";


import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <div>
        <NavBar />
        {!user ? <Welcome /> : <ChatBox />}
      </div>
    </>
  );
};

export default App;

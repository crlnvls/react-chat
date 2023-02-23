import React from "react";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";

const App = () => {
  const [user, setUser] = useState(false);

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

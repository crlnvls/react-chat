import React from "react";
import Message from "../Message";
import SendMessage from "../SendMessage";

const ChatBox = () => {
  return (
    <>
      <div>
        <Message />
      </div>
      <div>
        <SendMessage />
      </div>
    </>
  );
};

export default ChatBox;

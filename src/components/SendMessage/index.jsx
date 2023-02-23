import React from "react";

const SendMessage = () => {
  return (
    <form>
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        type="text"
        id="messageInput"
        name="messageInput"
        placeholder="type your message..."
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessage;

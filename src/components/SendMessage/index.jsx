import React, { useState } from "react";

import { auth, db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = () => {
  const [message, SetMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createAt: serverTimestamp(),
      uid,
    });
    SetMessage("");
  };

  return (
    <form onSubmit={(e) => sendMessage(e)}>
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        type="text"
        id="messageInput"
        name="messageInput"
        placeholder="type your message..."
        value={message}
        onChange={(m) => SetMessage(m.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessage;

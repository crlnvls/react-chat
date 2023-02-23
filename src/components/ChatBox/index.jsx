import React, { useEffect, useRef, useState } from "react";
import Message from "../Message";
import SendMessage from "../SendMessage";

import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";

import { db } from "../../firebase";

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

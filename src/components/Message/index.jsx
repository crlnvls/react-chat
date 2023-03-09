import React, { useEffect, useState } from "react";

import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";

import { db } from "../firebase";

const Message = () => {
  return (
    <>
      <div>
        <div>
          <p>Caroline Veloso</p>
          <p>Enjoy this real time chat</p>
        </div>
      </div>
    </>
  );
};

export default Message;

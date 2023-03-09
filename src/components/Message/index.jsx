import React, { useEffect, useState } from "react";

import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

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

import React from "react";

const Footer = () => {
  return (
    <>
      <p className="bg-gray-100 text-center p-2 fixed inset-x-0 bottom-0">
        2023 Ⓒ{" "}
        <a
          className="hover:underline"
          href="https://github.com/crlnvls/react-chat"
        >
          Caroline Veloso
        </a>
      </p>
    </>
  );
};

export default Footer;

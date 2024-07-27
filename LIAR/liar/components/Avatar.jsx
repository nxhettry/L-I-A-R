import React from "react";
import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      alt="Bordered avatar"
      width="400"
      height="400"
      className="hidden sm:flex w-10 h-10 p-1 rounded-full ring-2 ring-white"
      src="/logo.gif"
      priority={true}
    />
  );
};

export default Avatar;

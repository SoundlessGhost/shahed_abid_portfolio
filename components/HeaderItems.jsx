import React from "react";
import Link from "next/link";

const HeaderItems = () => {
  return (
    <nav className="hidden lg:block relative overflow-hidden pr-20">
      <Link className="ml-20 font-extrabold text-[20px]" href="#home">
        Home
      </Link>
      <Link className="ml-20 font-extrabold text-[20px]" href="#about">
        About
      </Link>
      <Link className="ml-20 font-extrabold text-[20px]" href="#project">
        Project
      </Link>
      <Link className="ml-20 font-extrabold text-[20px]" href="#contact">
        Contact
      </Link>
    </nav>
  );
};

export default HeaderItems;

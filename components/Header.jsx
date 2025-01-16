"use client";

import React from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import HeaderItems from "./HeaderItems";

import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="fixed font top-0 left-0 w-full z-50 flex items-center font-bold justify-between py-4 lg:px-10 text-white ">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="ml-10 lg:ml-0"
      >
        <Link className="text-4xl relative" href="/">
          SHAHED
        </Link>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <HeaderItems />
        <MobileNav />
      </motion.div>
    </div>
  );
};

export default Header;

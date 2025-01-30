"use client";

import Link from "next/link";
import MobileNav from "./MobileNav";
import HeaderItems from "./HeaderItems";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex items-center font-bold justify-between py-4 lg:px-10 text-white transition-all duration-300 ${
        isScrolled ? "bg-black/30 backdrop-blur-md" : "bg-transparent"
      }`}
    >
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

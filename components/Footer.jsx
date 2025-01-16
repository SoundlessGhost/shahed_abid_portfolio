"use client";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <MaxWidthWrapper>
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 2, delay: 1 }}
        className="border-0 border-t overflow-hidden border-[#516370] py-10 text-center font ImHere relative text-white font"
      >
        <p>
          Thanks for viewing my portfolio Designed By{" "}
          <span className="text-[#00abf0] font-bold">SHAHED ABID DARPON</span>
        </p>

        <div className="inline-flex items-center my-4 footerLink">
          <Link
            className="border-gray-400 rounded-full border-2 mr-4 p-3 text-gray-400"
            href="https://www.linkedin.com/in/shahed2247/"
            target="blank"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            className="border-gray-400 rounded-full border-2 mr-4 p-3 text-gray-400"
            href="https://www.facebook.com/shahed.abiddarpon"
            target="blank"
          >
            <FaFacebookF />
          </Link>
          <Link
            className="border-gray-400 rounded-full border-2 mr-4 p-3 text-gray-400"
            href="https://github.com/SoundlessGhost"
            target="blank"
          >
            <TbBrandGithubFilled />
          </Link>
        </div>

        <p>Copyright &copy; {new Date().getFullYear()}, All Rights Reserved</p>
      </motion.div>
    </MaxWidthWrapper>
  );
};

export default Footer;

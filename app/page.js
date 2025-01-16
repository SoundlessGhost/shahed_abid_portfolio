/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

import React from "react";
import About from "@/components/About";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import HomeContent from "@/components/HomeContent";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <div className="background"></div>
      <Header />

      <div className="lg:flex justify-between block">
        <HomeContent />
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <img
            className="h-[600] lg:mt-4 -mt-96 w-[700] rounded-full object-cover bg-transparent"
            src="/sha.png"
            alt=""
          />
        </motion.div>
      </div>

      {/* Projects */}

      <motion.h1
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="font-bold text-center text-6xl lg:-mt-20 font relative text-white "
      >
        Projects
        <Separator className="w-20 border-[#00abf0] mx-auto my-4 border-t-4 rounded-full" />
      </motion.h1>
      <Projects />

      {/* About */}

      <motion.h1
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="font-bold text-center text-6xl mt-20 font relative text-white mb-8"
      >
        About Me
        <Separator className="w-20 border-[#00abf0] mx-auto my-4 border-t-4 rounded-full" />
      </motion.h1>
      <About />

      {/* Education */}

      <motion.h1
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="font-bold text-center text-6xl mt-20 font relative text-white mb-8"
      >
        Education
        <Separator className="w-20 border-[#00abf0] mx-auto my-4 border-t-4 rounded-full" />
      </motion.h1>
      <Education />

      {/* Contact */}

      <motion.h1
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="font-bold text-center text-6xl mt-20 font relative text-white mb-8"
      >
        Contact
        <Separator className="w-20 border-[#00abf0] mx-auto my-4 border-t-4 rounded-full" />
      </motion.h1>
      <Contact />

      {/* Footer */}

      <Footer />
    </>
  );
}

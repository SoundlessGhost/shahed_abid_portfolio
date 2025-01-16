"use client";

import React from "react";

import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about font overflow-hidden text-white" id="about">
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="about-img"
      >
        <img
          className="w-[150px] border-4  h-[150px] rounded-full mt-[50px] ml-[-30px] object-cover"
          src="/shahed.jpg"
          alt=""
        />
        <div className="circle-spin"></div>
      </motion.div>

      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="text-start mx-20"
      >
        <h3 className="text-2xl text mb-6 title-width">So, Who Am I?</h3>
        <p className="">
          I'm a Full Stack Developer with a strong passion for mastering the
          MERN stack. Recently, I completed a complete web development course at
          Programming HeroI a'm quick learner. I believe in hard work and
          efficiency. That's why I am always ready to accomplish any task by
          working hard. I always focus on learning new technology. My goal is to
          become A World-Class Professional Web Developer.
        </p>
      </motion.div>
    </div>
  );
};

export default About;

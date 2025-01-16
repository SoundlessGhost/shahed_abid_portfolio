"use client";

import React from "react";

import { motion } from "framer-motion";
import { Separator } from "./ui/separator";

const Education = () => {
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      transition={{ duration: 2, delay: 0.5 }}
      className="text-white font grid lg:grid-cols-2 grid-cols-1 lg:mx-32 mx-10 mt-20"
    >
      <div className="mb-10 lg:mr-10">
        <h3>Batch 8</h3>
        <h1 className="title-width text-2xl">
          Complete Web Development Course
        </h1>
        <p>- Programming Hero</p>
        <Separator className=" w-[100%] mx-auto my-4 border-t-2 rounded-full" />
      </div>

      <div className="mb-10">
        <h3>Session 2023-2024</h3>
        <h1 className="title-width text-2xl">
          Bachelor (HONORS) In Mathematics
        </h1>
        <p>- Sirajganj Degree College, Sirajganj</p>
        <Separator className=" w-[100%] mx-auto my-4 border-t-2 rounded-full" />
      </div>

      <div className="lg:mr-10">
        <h3>Session 2021-2022</h3>
        <h1 className="title-width text-2xl">
          Higher Secondary School Certificate
        </h1>
        <p>- Valum Ataur Rahman Khan College, Dhamrai</p>
        <Separator className=" w-[100%] mx-auto my-4 border-t-2 rounded-full" />
      </div>

      <div className="">
        <h3>Session 2020-2021</h3>
        <h1 className="title-width text-2xl">Secondary School Certificate</h1>
        <p>- Badda High School, Savar</p>
        <Separator className=" w-[100%] mx-auto my-4 border-t-2 rounded-full" />
      </div>
    </motion.div>
  );
};

export default Education;

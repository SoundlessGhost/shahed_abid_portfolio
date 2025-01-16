"use client";
import React from "react";

const Resume = () => {
  return (
    <button className="border-2  border-[#00abf0] relative py-4 text-[#00abf0] font-bold mt-10">
      <a download href="/resumes/Shahed_Abid.pdf" className="">
        Download CV
      </a>
    </button>
  );
};

export default Resume;

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { Button } from "./ui/button";
import { motion } from "framer-motion";

const ProjectData = () => {
  return (
    <div className="group transition rounded-lg px-8 h-full overflow-hidden">
      <div className="flex flex-col mt-20">
        <div className="block lg:flex ">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            <img
              className="lg:w-[650px] md:w-[100%] mb-4 mr-20 rounded-xl lg:h-[400px] md:h-[600px] object-cover"
              src={"/lms.png"}
              alt="projects images"
            />
          </motion.div>

          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="text-start lg:ml-10 lg:w-[650px] md:w-[100%] "
          >
            <h3 className="text-4xl text-white title-width mb-2">
              Learning Management System
            </h3>
            <p className="text-gray-400 mb-4">
              A learning management system (LMS) is a software application that
              helps create, manage, and deliver educational content. It's also
              known as a virtual learning environment (VLE).
            </p>
            <h3 className="text-sm text-white title-width">Core Features:</h3>
            <p className="text-gray-400">
              1. Backend-Driven Platform – A fully backend-based system with
              Role-Based Access Control for secure and efficient user
              management.
            </p>
            <p className="text-gray-400">
              2. Project Discovery & Filtering – Users can explore projects that
              match their interests and apply filters to find the most suitable
              options.
            </p>
            <p className="text-gray-400">
              3. Content Management for Educators – Teachers can create, manage,
              and deliver educational content with ease.
            </p>

            <Link
              href={"https://pleasure-things2247.vercel.app/"}
              target="_blank"
            >
              <Button variant="outline" className="mt-4 text-2xl py-6 px-8">
                Live Site
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col mt-20">
        <div className="block lg:flex ">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="text-start lg:mr-10 lg:w-[650px] md:w-[100%] mb-4"
          >
            <h3 className="text-4xl text-white title-width mb-2">Alliance</h3>
            <p className="text-gray-400 mb-4">
              Alliance is a modern matrimony platform designed to help
              individuals connect effortlessly. It offers an intuitive interface
              and essential features to simplify the journey of finding the
              perfect life partner.
            </p>
            <h3 className="text-sm text-white title-width">Core Features:</h3>
            <p className="text-gray-400">
              1. Responsive & User-Friendly Design – Ensures a seamless
              experience across all devices.
            </p>
            <p className="text-gray-400">
              2. Secure Authentication with Clerk – Provides a smooth and
              reliable login process.
            </p>
            <p className="text-gray-400">
              3. Role-Based Access Control – Enhances security by managing user
              permissions effectively.
            </p>

            <Link href={"https://alliance2247.vercel.app/"} target="_blank">
              <Button variant="outline" className="mt-4 text-2xl py-6 px-8">
                Live Site
              </Button>
            </Link>
          </motion.div>

          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            <img
              className="lg:w-[650px] md:w-[100%] mb-4 mr-20 rounded-xl lg:h-[400px] md:h-[600px] object-cover"
              src={"/alliance.png"}
              alt="projects images"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectData;

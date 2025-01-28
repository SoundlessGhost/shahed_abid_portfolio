/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { projects } from "@/lib/projectsData";

const ProjectData = () => {
  return (
    <div className="group transition rounded-lg px-8 h-full overflow-hidden">
      {projects.map((item) => (
        <div key={item.id} className="flex flex-col mt-20">
          <div className="block lg:flex ">
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              <img
                className="lg:w-[650px] md:w-[100%] mb-4 mr-20 rounded-xl lg:h-[400px] md:h-[600px]"
                src={item.img}
                alt="projects images"
              />
            </motion.div>

            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="text-start lg:ml-10 lg:w-[650px] md:w-[100%] "
            >
              <h3 className="text-4xl text-white title-width my-2">
                {item.title}
              </h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <h3 className="text-sm text-white title-width">Core Features:</h3>
              {item.core &&
                item.core.map((feature, index) => (
                  <p className="text-gray-400" key={index}>
                    {index + 1}. {feature}
                  </p>
                ))}
              <Link href={item.link} target="_blank">
                <Button variant="outline" className="mt-4 text-2xl py-6 px-8">
                  Live Site
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectData;

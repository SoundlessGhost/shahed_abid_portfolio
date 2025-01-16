import Link from "next/link";
import { motion } from "framer-motion";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const HomeContent = () => {
  return (
    <div
      id="#home"
      className="font text-white overflow-hidden mt-20 lg:flex items-center justify-between block mb-20"
    >
      <div className="h-[100vh] flex items-center py-0 px-8 max-w-[800px] ">
        <section className="Home-Content">
          {/* page text */}

          <div>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="md:text-[45px] text-[35px] font-extrabold mb-2 title"
            >
              HI, <br />
              I&apos;M SHAHED ABID DARPON
            </motion.h1>

            <motion.h3
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="text-[20px] md:text-[30px] font-semibold relative"
            >
              Full Stack Developer
            </motion.h3>

            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="text-[14px] md:text-[16px] relative"
            >
              Working with{" "}
              <span className="text-[#00abf0] text-[16px]  md:text-[18px] font-extrabold">
                React Js
              </span>
              ,{" "}
              <span className="text-[#00abf0] text-[16px]  md:text-[18px] font-extrabold">
                Next Js
              </span>
              ,{" "}
              <span className="text-[#00abf0] text-[16px]  md:text-[18px] font-extrabold">
                Node Js
              </span>
              ,{" "}
              <span className="text-[#00abf0] text-[16px]  md:text-[18px] font-extrabold">
                Express Js
              </span>
              ,{" "}
              <span className="text-[#00abf0] text-[16px]  md:text-[18px] font-extrabold">
                Redux
              </span>
              ,{" "}
              <span className="text-[#00abf0] text-[16px]  md:text-[18px] font-extrabold">
                Prisma
              </span>
              ,{" "}
              <span className="text-[#00abf0] text-[16px]  md:text-[18px] font-extrabold">
                PostgreSQL
              </span>
              ,{" "}
              <span className="text-[#00abf0] text-[16px]  md:text-[18px] font-extrabold">
                MySQL
              </span>
              ,{" "}
              <span className="text-[#00abf0] text-[16px]  md:text-[18px] font-extrabold">
                MongoDB
              </span>
              . I&apos;m will be responsible for building and maintaining MERN
              Stack web applications and will play a key role in the development
              of our projects. MERN Stack Developer.
            </motion.p>
          </div>

          {/* links */}

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="inline-flex items-center mt-10 Home_sci"
          >
            <motion.div>
              <Link
                className="border-[#00abf0] rounded-full border-2 mr-4 p-3 text-[#00abf0] inline-flex items-center "
                href="https://www.linkedin.com/in/shahed2247/"
                target="blank"
              >
                <FaLinkedinIn />
              </Link>
            </motion.div>

            <motion.div>
              <Link
                className="border-[#00abf0] rounded-full border-2 mr-4 p-3 text-[#00abf0]  inline-flex items-center "
                href="https://www.facebook.com/shahed.abiddarpon"
                target="blank"
              >
                <FaFacebookF />
              </Link>
            </motion.div>

            <motion.div>
              <Link
                className="border-[#00abf0] rounded-full border-2 mr-4 p-3 text-[#00abf0]  inline-flex items-center "
                href="https://github.com/SoundlessGhost"
                target="blank"
              >
                <TbBrandGithubFilled />
              </Link>
            </motion.div>
            <button
              type="submit"
              className="font-bold py-2 ml-6 text-[17px] text-black px-4 flex items-center rounded bg-[#2ca8ea] transition"
            >
              <FaCloudDownloadAlt size={16} className="mr-1" />
              <a download href="/resumes/Shahed_Abid.pdf">
                Download Resume
              </a>
            </button>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default HomeContent;

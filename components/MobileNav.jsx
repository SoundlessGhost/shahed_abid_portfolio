"use client";
import Link from "next/link";
import Image from "next/image";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
import { TbBrandGithubFilled } from "react-icons/tb";
import { PiArrowBendRightDownFill } from "react-icons/pi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const closeOnCurrent = (href) => {
    if (pathname === href) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  if (!isOpen)
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="lg:hidden relative -ml-10 inline-flex items-center justify-center rounded-md text-white"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>
    );

  return (
    <div>
      <div className="relative z-40 lg:hidden overflow-hidden">
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </div>

      <div className="fixed overflow-y-scroll overscroll-y-none inset-0 z-40 flex ">
        <div className="w-4/5">
          <div
            className={`relative flex w-full max-w-sm flex-col overflow-y-auto pb-12 shadow-xl bg-gray-800 font`}
          >
            {/* Heading Part */}

            <div className="border-0 border-b border-[#516370] bg-[#19191d] p-4 absolute left-0 top-0">
              <X
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 text-white mb-4 cursor-pointer"
              />

              <div className="flex items-center mb-6">
                <Image
                  height={10}
                  width={10}
                  className="w-[40px] h-[40px] mr-2 rounded-full"
                  src="/shahed1.jpg"
                  alt=""
                />
                <p className="text-[18px]">Shahed Abid Darpon</p>
              </div>
              <p className="mb-3">
                To develop a profitable portfolio, its fundamentals.
              </p>
            </div>

            {/* Middle Part*/}

            <div className="text-white mt-[230px] flex flex-col">
              <Link
                onClick={() => closeOnCurrent("/")}
                className={`${buttonVariants({
                  variant: "link",
                })} text-white `}
                href="#"
              >
                Home
              </Link>
              <Link
                onClick={() => closeOnCurrent("/")}
                className={`${buttonVariants({
                  variant: "link",
                })} text-white `}
                href="#about"
              >
                About
              </Link>
              <Link
                onClick={() => closeOnCurrent("/")}
                className={`${buttonVariants({
                  variant: "link",
                })} text-white `}
                href="#project"
              >
                Project
              </Link>
              <Link
                onClick={() => closeOnCurrent("/")}
                className={`${buttonVariants({
                  variant: "link",
                })} text-white `}
                href="#contact"
              >
                Contact
              </Link>
            </div>

            <div className="ml-4 mt-4">
              <p className="mb-4 flex items-center mt-6">
                <span className=" text-[#00abf0] ">FIND ME</span>{" "}
                <PiArrowBendRightDownFill
                  className="mt-4"
                  size={20}
                ></PiArrowBendRightDownFill>
              </p>

              <div className="inline-flex items-center MobileNavbarLink ml-8">
                <Link
                  className="border-[#87ceeb] rounded-full border-2 mr-4 p-3 text-white"
                  href="https://www.linkedin.com/in/shahed2247/"
                  target="blank"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  className="border-[#87ceeb] rounded-full border-2 mr-4 p-3 text-white"
                  href="https://www.facebook.com/shahed.abiddarpon"
                  target="blank"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  className="border-[#87ceeb] rounded-full border-2 mr-4 p-3 text-white"
                  href="https://github.com/SoundlessGhost"
                  target="blank"
                >
                  <TbBrandGithubFilled />
                </Link>
              </div>
            </div>

            {/* Footer Part */}

            <div className="mt-6 text-center">
              <p>
                Designed and Developed <br />
                <span className="text-[#00abf0]">SHAHED ABID DARPON</span>
              </p>
              <p className="text-[14px] mt-8 text-center">
                Copyright © 2024, All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav>
      <div>
        <ul className="hidden md:flex">
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
          </Link>

          <Link href="/#about">
            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
          </Link>

          <Link href="/#skills">
            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
          </Link>

          <Link href="/#projects">
            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
          </Link>

          <Link href="/#contact">
            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
          </Link>
        </ul>
        <div onClick={handleNav} className="md:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden  fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/" passHref>
                <a>
                  <Image
                    src="/logo/milhas-code-logo.png"
                    width="100"
                    height="75"
                    alt="/"
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w=[85%] md:w-[90%] py-4">Making Things Work</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/" passHref>
                <a>
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Home
                  </li>
                </a>
              </Link>
              <Link href="/#about">
                <a>
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    About
                  </li>
                </a>
              </Link>
              <Link href="/#skills">
                <a>
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Skills
                  </li>
                </a>
              </Link>
              <Link href="/#projects">
                <a>
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Projects
                  </li>
                </a>
              </Link>
              <Link href="/#contact">
                <a>
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Contact
                  </li>
                </a>
              </Link>
            </ul>
            {/* <div className="pt-40">
              <p className="uppecase tracking-widest text-[#5651e5]">
                Let's connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

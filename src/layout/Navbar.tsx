/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
import { GiFizzingFlask } from "react-icons/gi";
import { FaDiscord } from "react-icons/fa6";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { SiRocket } from "react-icons/si";

import { useState } from "react";

export default function Navbar() {
  const navLinks = [
    { label: "  ", to: "/" },
    { label: "Quem Somos?", to: "/" },

    { label: "Nossos Trabalhos", to: "/trabalhos" },
    { label: "Reviews", to: "/" },
    { label: "Contate-nos", to: "/" },
  ];

  const [loading, setLoading] = useState(false);

  return (
    <header>
      <div className="bg-black flex justify-center lg:justify-around py-8 px-8 text-white h-2/5 max-h-[90px] border-b border-[#171717]">
        <div className="flex items-center gap-4  z-20">
          {/* sidebar menu icon */}
          <div className="lg:hidden">
            <input id="open-menu" type="checkbox" className="drawer-toggle" />
            <div>
              {/* Page content here */}
              <label htmlFor="open-menu" className="cursor-pointer">
                <div className="bg-[#1A1A1A] rounded-xl transition duration-300  cursor-pointer py-3 px-3 text-xl lg:hidden hover:bg-white hover:text-black hover:scale-110">
                  <CgMenuGridO />
                </div>
              </label>
            </div>

            <div className="drawer-side">
              <label
                htmlFor="open-menu"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-[#171717] border-r border-solid shadow-xl border-[#19191A] text-base-content object-cover">
                {/* Sidebar content here */}
                <li className="mb-6">
                  <Link
                    to={"/"}
                    className="flex items-center transition duration-300 hover:scale-105"
                  >
                    <img
                      src="https://assets-global.website-files.com/662e02200e936b9abdb4cb43/662e38f56f12f5305ecba023_Logo.svg"
                      alt="Spacefy Logo"
                      className="w-32 "
                    />
                  </Link>
                </li>
                <li className="font-poppins font-normal text-lg text-center text-[#9e9e9e] transition duration-300 hover:text-white hover:scale-105 ">
                  <a>Quem Somos?</a>
                </li>
                <li className="font-poppins font-normal text-lg text-center text-[#9e9e9e] transition duration-300 hover:text-white hover:scale-105 ">
                  <a href="/trabalhos">Nossos Trabalhos</a>
                </li>
                <li className="font-poppins font-normal text-lg text-center text-[#9e9e9e] transition duration-300 hover:text-white hover:scale-105 ">
                  <a>Reviews</a>
                </li>
                <li className="font-poppins font-normal text-lg text-center text-[#9e9e9e] transition duration-300 hover:text-white hover:scale-105 ">
                  <a>Contate-nos</a>
                </li>

                <li className="absolute bottom-0 mb-6">
                  <a className="bg-black py-2 px-24 font-poppins text-white font-medium gap-2 border border-solid border-[#313131] transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:border-white">
                    <GiFizzingFlask className="justify-start" /> Hire Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* logo */}

          <Link
            to={"/"}
            className="flex items-center  transition duration-300 hover:scale-105  gap-4 font-inter text-2xl text-center justify-center font-bold"
          >
            <SiRocket className="!text-indigo-600 text-3xl" /> Spacefy
          </Link>
          <Link
            to="#"
            className="flex font-poppins text-white bg-[#6665D2] rounded-xl text-xl py-2 px-4  gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-[#7289DA] hover:text-white lg:hidden"
          >
            <BiLogoDiscordAlt className="mt-[0.2rem] " />
          </Link>
        </div>

        <nav>
          <ul className="flex gap-6 justify-center text-center z-20">
            {navLinks.map((d, i) => (
              <li className="font-poppins font-medium text-sm text-[#9e9e9e] py-2 px-2 hidden lg:block  transition duration-300 hover:bg-[#171717] hover:text-white hover:scale-105 rounded-xl z-20">
                <Link to={d.to} key={i}>
                  {d.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4 z-20">
          <div className="justify-start lg:justify-end gap-2 hidden lg:block">
            <Link
              to=""
              className="flex font-poppins text-white bg-[#171717] rounded-xl  border-solid border-[#313131] py-2 px-4 text-sm gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-white hover:text-black hover:border-0"
            >
              <FaDiscord className="mt-[0.2rem] text-lg" />
            </Link>
          </div>
          <div className="justify-start lg:justify-end gap-2 hidden lg:block duration-500 animate-bounce">
            <Link
              to=""
              className="flex font-poppins text-white bg-[#171717] rounded-xl  border-solid border-[#313131] py-2 px-4 text-sm gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-white hover:text-black hover:border-0"
            >
              Explorar <MdOutlineTravelExplore className="text-lg" />
            </Link>
          </div>
        </div>
      </div>
      {/* sideBar mobile section */}
    </header>
  );
}

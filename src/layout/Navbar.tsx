import { BiLogoDiscordAlt } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";
import { FaDiscord, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineTravelExplore } from "react-icons/md";
import { SiRocket } from "react-icons/si";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to={"/"}
      className="flex items-center transition duration-300 hover:scale-105 gap-2 font-inter text-2xl text-center justify-center text-white font-bold"
    >
      <SiRocket className="!text-indigo-600 text-3xl" />
      Spacefy
    </Link>
  )
}

function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={`flex gap-2 ${className || ''}`}>
      <a href="https://wa.link/dv04f7" target="_blank">
        <div className="font-bold py-3 px-4 bg-transparent border-solid border-[#333] border rounded-lg text-white text-md transition duration-300 hover:bg-white hover:border-white hover:text-black hover:scale-105">
          <FaWhatsapp />
        </div>
      </a>
      <a href="https://www.instagram.com/spacefy_oficial/" target="_blank">
        <div className="font-bold py-3 px-4 bg-transparent border-solid border-[#333] border rounded-lg text-white text-md transition duration-300 hover:bg-white hover:border-white hover:text-black hover:scale-105">
          <FaInstagram />
        </div>
      </a>
      <a href="https://discord.gg/VZvz8rUTuv" target="_blank">
        <div className="font-bold py-3 px-4 bg-transparent border-solid border-[#333] border rounded-lg text-white text-md transition duration-300 hover:bg-white hover:border-white hover:text-black hover:scale-105">
          <FaDiscord />
        </div>
      </a>
    </div>
  )
}

export default function Navbar() {
  const navLinks = [
    { label: "Nossos Trabalhos", to: "/trabalhos" },
    { label: "Reviews", to: "/#reviews" },
  ];

  return (
    <header>
      <div className="bg-black flex justify-center lg:justify-evenly py-8 px-8 text-white h-2/5 max-h-[90px] border-b border-[#171717]">
        <div className="flex items-center gap-6">
          <div className="lg:hidden">
            <input id="open-menu" type="checkbox" className="drawer-toggle" />
            <div>
              <label htmlFor="open-menu" className="cursor-pointer">
                <div className="bg-[#1A1A1A] rounded-xl transition duration-300  cursor-pointer p-3 text-xl lg:hidden hover:bg-white hover:text-black hover:scale-110">
                  <CgMenuGridO size={20} />
                </div>
              </label>
            </div>

            <div className="drawer-side z-20">
              <label
                htmlFor="open-menu"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-[#171717] border-r border-solid shadow-xl border-[#19191A] text-base-content object-cover">
                <li className="mb-6">
                  <Logo />
                </li>

                {navLinks.map((link, idx) => (
                  <li key={idx} className="font-poppins font-normal text-lg text-center text-[#9e9e9e] transition duration-300 hover:text-white hover:scale-105">
                    <a href={link.to}>
                      {link.label}
                    </a>
                  </li>
                ))}

                <SocialLinks className="mt-auto mb-0 w-fit" />
              </ul>
            </div>
          </div>

          <Logo />

          <Link
            to="#"
            className="flex font-poppins text-white bg-[#6665D2] rounded-xl text-xl py-3 px-3 gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-[#7289DA] hover:text-white lg:hidden"
          >
            <BiLogoDiscordAlt size={20} />
          </Link>
        </div>

        <nav className="animate-fade-down animate-duration-[2000ms]">
          <ul className="flex gap-6">
            {navLinks.map((link, idx) => (
              <li key={idx} className="font-poppins font-medium text-sm text-[#9e9e9e] py-2 px-2 hidden lg:block transition duration-300 hover:bg-[#171717] hover:text-white hover:scale-105 rounded-xl">
                <Link to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4 animate-fade-down animate-duration-[2000ms]">
          <SocialLinks className="hidden lg:flex" />
          <div className="justify-start lg:justify-end gap-2 hidden lg:block duration-500 animate-bounce">
            <Link
              to="/trabalhos"
              className="flex font-poppins text-white bg-[#171717] rounded-xl  border-solid border-[#313131] py-3 px-4 text-sm gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-white hover:text-black hover:border-0"
            >
              Explorar <MdOutlineTravelExplore className="text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

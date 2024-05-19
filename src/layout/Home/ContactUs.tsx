
import { Link } from "react-router-dom";
import { MdTransform } from "react-icons/md";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

export function ContactUs() {
  return (
    <>
      <section className="bg-black py-6">
        <div className="flex flex-col items-center py-12 text-center">
          <h1 className="text-[#daabff] text-md font-mulish font-semibold ">
            Garantindo a Inovação!
          </h1>
          <h1 className="font-poppins font-bold text-4xl lg:text-7xl text-white max-w-screen-xl">
            Transforme Ideias,
            <br />{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#daabff] to-[#5723ac]">
              Realize Sonhos.
            </span>
          </h1>
          <p className="text-[#9e9e9e] font-inter font-normal leading-normal text-md mt-4 max-w-screen-sm">
            Estamos prontos para transformar suas ideias em realidade. Entre em
            contato conosco hoje e encomende o seu site personalizado.
          </p>
          <div className="flex gap-4 py-6">
            <Link
              to=""
              className="flex font-poppins text-white bg-indigo-800 rounded-lg py-2 px-6 text-sm gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-white hover:text-black hover:border-0"
            >
              Começar Hoje <MdTransform className="mt-[0.2rem]" />
            </Link>

            <Link
              to=""
              className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-sm gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-white hover:text-black hover:border-0"
            >
              Contate-nos <MdOutlineConnectWithoutContact className="mt-[0.2rem]" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

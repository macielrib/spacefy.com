"use client";
import { GiFizzingFlask } from "react-icons/gi";
import { Button } from "../../components/ui/moving-border";
import { Link } from "react-router-dom";
import { GiJusticeStar } from "react-icons/gi";
import { MdContacts } from "react-icons/md";

import { QuemSomos } from "./QuemSomos";
import { NossosTrabalhos } from "./NossosTrabalhos";
import { Reviews } from "./Reviews";
import { ContactUs } from "./ContactUs";

export function HeroSection() {
  return (
    <>
      <section>
        <div className="h-full w-full bg-black flex flex-col items-center justify-center py-6 ">
          <div className="text-center max-w-md lg:max-w-screen-xl">
            <Button
              borderRadius="1.75rem"
              className="bg-[ #171717] text-white font-inter font-semibold  border-[#333] gap-2 "
            >
              Sites de Sucesso{" "}
              <GiJusticeStar className="animate-spin duration-1000 delay-1000 text-indigo-600 text-lg" />
            </Button>

            <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-[#daabff] to-[#5723ac] font-semibold text-5xl lg:text-7xl font-poppins">
              Explore o Inovador.
            </h1>
            <h1 className="text-white font-bold text-5xl lg:text-7xl font-poppins">
              Crie Sites de Sucesso.
            </h1>
            <p className="text-[#9e9e9e] font-inter font-normal leading-normal text-md mt-4 ">
              Onde a imaginação encontra a inovação. Liberte sua criatividade
              conosco!
            </p>
          </div>
          <div className="flex justify-center text-center py-6 gap-4 ">
            <Link
              to=""
              className="flex font-poppins text-white bg-indigo-800 rounded-lg py-2 px-6 text-sm gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-white hover:text-black hover:border-0"
            >
              Começar Agora! <GiFizzingFlask className="mt-[0.2rem]" />
            </Link>
            <Link
              to=""
              className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-sm gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-white hover:text-black hover:border-0"
            >
              Falar Conosco <MdContacts className="mt-[0.2rem]" />
            </Link>
          </div>
          <div className="py-8 px-6 rounded-xl ">
            <img
              src={`https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1920&q=75`}
              alt="hero"
              height={720}
              width={1000}
              className="mx-auto rounded-2xl object-cover h-full object-left-top border-solid border-4 border-[#171717]"
              draggable={false}
            />
          </div>
        </div>
      </section>

      <QuemSomos></QuemSomos>
      <NossosTrabalhos></NossosTrabalhos>
      <Reviews></Reviews>
      <ContactUs></ContactUs>
    </>
  );
}

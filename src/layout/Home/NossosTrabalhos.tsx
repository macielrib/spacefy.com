/* eslint-disable @typescript-eslint/no-unused-vars */
import { SiSecurityscorecard } from "react-icons/si";
import { GiPadlock } from "react-icons/gi";
import { HiHomeModern } from "react-icons/hi2";
import { Tabs } from "../../components/ui/tabs";

export function NossosTrabalhos() {
  const tabs = [
    {
      title: "Serviços de Hospedagem",
      value: "hospedagem",
      content: (
        <>
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold text-white bg-[url('https://cherrycode.com.br/img/hype.f49c8371.webp')]  border-4 border-solid border-[#171717]"></div>
       
        </>
      ),
    },

    {
      title: "Site Empresarial",
      value: "empresarial",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-5xl font-bold text-white bg-[url('https://cherrycode.com.br/img/romanscripter.088f72f0.png')]  border-4 border-solid border-[#171717]"></div>
      ),
    },
    {
      title: "Site para Jogos",
      value: "jogos",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-5xl font-bold text-white bg-[url('https://cherrycode.com.br/img/cbrp.5a3ceb49.png')]  border-4 border-solid border-[#171717]"></div>
      ),
    },
    {
      title: "Site Constitucional",
      value: "constitucional",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-5xl font-bold text-white bg-[url('https://cherrycode.com.br/img/dh-telecom.91cac3a4.png')]  border-4 border-solid border-[#171717]"></div>
      ),
    },
  ];

  return (
    <>
      <section className="bg-black py-12">
        <div className="flex items-center">
          <div className="flex flex-col lg:items-start py-12 lg:px-16 text-center lg:text-start">
            <h1 className="text-[#daabff] text-md font-mulish font-semibold ">
              Moderno & Capacitado
            </h1>
            <h1 className="font-poppins font-bold text-5xl lg:text-7xl text-white max-w-screen-xl">
              Serviços Avançados,
              <br />{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#daabff] to-[#5723ac]">
                Projetos Modernizados.
              </span>
            </h1>
            <p className="text-[#9e9e9e] font-inter font-normal leading-normal     text-md mt-4 max-w-screen-md">
              Utilizamos as ferramentas mais avançadas para garantir que seus
              projetos sejam modernizados com as mais recentes tecnologias.
              Experimente inovação e qualidade em cada detalhe.
            </p>
            <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col  w-full  items-start justify-start py-12">
              <Tabs tabs={tabs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

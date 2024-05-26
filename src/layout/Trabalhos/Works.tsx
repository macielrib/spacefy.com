import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import { Reveal } from "../../components/motion/RevealScroll";
import { GiTowTruck } from "react-icons/gi";

const WORKS = [
  {
    title: "Pulsecode",
    completionDays: 4,
    brand: "Pulsecode ©",
    image: "/portfolio/png/Pulsecode.png",
    social: { twitter: null, discord: null, instagram: null },
    redirectUrl: null,
  },
  {
    title: "HyriumNetwork",
    completionDays: 9,
    brand: "Hyrium ©",
    image: "/portfolio/png/TwistyJogo.png",
    social: { twitter: null, discord: null, instagram: null },
    redirectUrl: null,
  },
  {
    title: "fineMetrics",
    completionDays: 6,
    brand: "fineMetrics ©",
    image: "/portfolio/png/FineMetrics.png",
    social: { twitter: null, discord: null, instagram: null },
    redirectUrl: "https://finemetrics.vercel.app",
  },
  {
    title: "JW Saraiva",
    completionDays: 3,
    brand: "Grupo JW ©",
    image: "/portfolio/png/JWConstitucional.png",
    social: { twitter: null, discord: null, instagram: null },
    redirectUrl: null,
  },
  {
    title: "Amazing Studios",
    completionDays: 7,
    brand: "Amazing ©",
    image: "/portfolio/png/AmazingEmpresarial.png",
    social: { twitter: null, discord: null, instagram: null },
    redirectUrl: null,
  },
  {
    title: "SpaceLabs",
    completionDays: 11,
    brand: "SpaceLabs ©",
    image: "/portfolio/png/SpaceLabs.png",
    social: { twitter: null, discord: null, instagram: null },
    redirectUrl: null,
  },
];

export function Works() {
  return (
    <>
      <section className="bg-black py-12">
        <div className="justify-center lg:justify-start flex px-24 animate-fade-right animate-duration-[4000ms] py-4">
          <Link
            to="/"
            className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-sm gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-white hover:text-black hover:border-0 "
          >
            Retornar <TiArrowBack className="mt-[0.2rem]" />
          </Link>
        </div>
        <div className="flex flex-col items-center text-center animate-fade-down animate-duration-[2000ms] px-12">
          <h1 className="text-[#daabff] text-md font-mulish font-semibold ">
            Inovação & Qualidade
          </h1>
          <h1 className="font-poppins font-bold text-5xl lg:text-7xl text-white max-w-screen-xl">
            Sites de Excelência,
            <br />{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#daabff] to-[#5723ac]">
              Resultados Garantidos.
            </span>
          </h1>
          <p className="text-[#9e9e9e] font-inter font-normal leading-normal text-md mt-4 max-w-screen-sm animate-fade-down animate-duration-[4000ms]">
            Explore nossos projetos e veja como entregamos excelência em cada
            website, garantindo resultados que superam as expectativas.
          </p>
          <p className="text-[#444] font-inter font-medium text-sm mt-4">
            (alguns sites estão indisponíveis para ver por opções de clientes)
          </p>
        </div>

        <Reveal>
          <div className="flex justify-center flex-wrap max-w-7xl mx-auto mt-16">
            {WORKS.map((work) => (
              <CardContainer
                key={work.title}
                className="inter-var min-w-96 w-1/3 px-3 my-3 sm:w-full md:w-full lg:w-full xl:w-full"
              >
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white font-inter"
                  >
                    {work.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm mt-2 dark:text-neutral-300 font-mulish font-normal"
                  >
                    Este site foi finalizado em{" "}
                    <b>{work.completionDays} dias</b> para <b>{work.brand}</b>
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={work.image}
                      className="h-48 object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer teste123"
                      alt="Imagem do projeto"
                    />
                  </CardItem>
                  <div className="flex items-center mt-20 gap-2 justify-center">
                    {work.social.twitter !== undefined && (
                      <Link
                        to={""}
                        className="flex font-poppins text-white bg-[#171717] rounded-lg border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                      >
                        <FaTwitter />
                      </Link>
                    )}

                    {work.social.discord !== undefined && (
                      <Link
                        to={""}
                        className="flex font-poppins text-white bg-[#171717] rounded-lg border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                      >
                        <FaDiscord />
                      </Link>
                    )}

                    {work.social.instagram !== undefined && (
                      <Link
                        to={""}
                        className="flex font-poppins text-white bg-[#171717] rounded-lg border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                      >
                        <FaInstagram />
                      </Link>
                    )}

                    {work.redirectUrl && (
                      <Link
                        to={work.redirectUrl}
                        target="_blank"
                        className="flex font-poppins text-white bg-[#111] rounded-sm border-solid border-[#313131] py-2 px-6 text-xs gap-2 transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1"
                      >
                        <HiOutlineExternalLink />
                      </Link>
                    )}
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="flex flex-col items-center py-12 text-center animate-fade-down animate-duration-[2000ms]">
          
            <h1 className="font-poppins font-bold text-4xl lg:text-7xl text-white max-w-screen-xl">
              Interessado em Algo?
              <br />{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#daabff] to-[#5723ac]">
                Vamos Conversar!
              </span>
            </h1>
            <p className="text-[#9e9e9e] font-inter font-normal leading-normal text-md mt-4 max-w-screen-sm">
            Gostou do que viu? Nossa equipe está pronta para criar um site incrível para você. Fale conosco e comece seu projeto agora mesmo!
            </p>
            <div className="flex gap-4 py-6 animate-fade-down animate-duration-[2000ms]">
              <Link
                to="https://wa.link/dv04f7"
                target="_blank"
                className="flex font-poppins text-white bg-indigo-800 rounded-lg py-2 px-6 text-sm gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-white hover:text-black hover:border-0"
              >
                Solicitar Agora <GiTowTruck className="mt-[0.2rem]" />
              </Link>

            
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

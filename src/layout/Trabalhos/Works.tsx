
import { Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import { FaTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export function Works() {
  return (
    <>
      <section className="bg-black py-12 ">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[#daabff] text-md font-mulish font-semibold ">
            Experiência & Inovação
          </h1>
          <h1 className="font-poppins font-bold text-5xl lg:text-7xl text-white max-w-screen-xl">
            Sites Inovadores,
            <br />{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#daabff] to-[#5723ac]">
              Resultados Excepcionais.
            </span>
          </h1>
          <p className="text-[#9e9e9e] font-inter font-normal leading-normal text-md mt-4 max-w-screen-sm">
            Explore nossos projetos e veja como nossos websites podem destacar
            seu negócio no mercado. Desvende as possibilidades de uma presença
            online marcante.
          </p>
        </div>
        <div className="flex justify-center gap-4 -mb-16 flex-wrap">
          <CardContainer className="inter-var gap-4">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white font-inter"
              >
                Cidade Bella
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 font-mulish font-normal"
              >
                Este site foi finalizado em <b>9 dias</b> para{" "}
                <b>CidadeBella</b>.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="https://cherrycode.com.br/img/cbrp.5a3ceb49.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex  items-center mt-20 gap-2">
                <Link
                  to="/"
                  className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-xs gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-white hover:text-black hover:border-0"
                >
                  Ir até o Site
                </Link>
                <Link
                  to={""}
                  className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                >
                  <FaTwitter />
                </Link>
                <Link
                  to="/"
                  className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-xs gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-white hover:text-black hover:border-0"
                >
                  <FaDiscord />
                </Link>
                <Link
                  to={""}
                  className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                >
                  <FaInstagram />
                </Link>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var gap-4">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white font-inter"
              >
                Cidade Bella
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 font-mulish font-normal"
              >
                Este site foi finalizado em <b>9 dias</b> para{" "}
                <b>CidadeBella</b>.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="https://cherrycode.com.br/img/cbrp.5a3ceb49.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex  items-center mt-20 gap-2">
                <Link
                  to="/"
                  className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-xs gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-white hover:text-black hover:border-0"
                >
                  Ir até o Site
                </Link>
                <Link
                  to={""}
                  className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                >
                  <FaTwitter />
                </Link>
                <Link
                  to="/"
                  className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-xs gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-white hover:text-black hover:border-0"
                >
                  <FaDiscord />
                </Link>
                <Link
                  to={""}
                  className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                >
                  <FaInstagram />
                </Link>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var gap-4">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white font-inter"
              >
                Cidade Bella
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 font-mulish font-normal"
              >
                Este site foi finalizado em <b>9 dias</b> para{" "}
                <b>CidadeBella</b>.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="https://cherrycode.com.br/img/cbrp.5a3ceb49.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex  items-center mt-20 gap-2">
                <Link
                  to="/"
                  className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-xs gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-white hover:text-black hover:border-0"
                >
                  Ir até o Site
                </Link>
                <Link
                  to={""}
                  className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                >
                  <FaTwitter />
                </Link>
                <Link
                  to="/"
                  className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-xs gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-white hover:text-black hover:border-0"
                >
                  <FaDiscord />
                </Link>
                <Link
                  to={""}
                  className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                >
                  <FaInstagram />
                </Link>
              </div>
            </CardBody>
          </CardContainer>
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
          <CardContainer className="inter-var gap-4">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white font-inter"
              >
                Cidade Bella
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 font-mulish font-normal"
              >
                Este site foi finalizado em <b>9 dias</b> para{" "}
                <b>CidadeBella</b>.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="https://cherrycode.com.br/img/cbrp.5a3ceb49.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex  items-center mt-20 gap-2">
                <Link
                  to="/"
                  className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-xs gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-white hover:text-black hover:border-0"
                >
                  Ir até o Site
                </Link>
                <Link
                  to={""}
                  className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                >
                  <FaTwitter />
                </Link>
                <Link
                  to="/"
                  className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-xs gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-white hover:text-black hover:border-0"
                >
                  <FaDiscord />
                </Link>
                <Link
                  to={""}
                  className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                >
                  <FaInstagram />
                </Link>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var gap-4">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white font-inter"
              >
                Cidade Bella
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 font-mulish font-normal"
              >
                Este site foi finalizado em <b>9 dias</b> para{" "}
                <b>CidadeBella</b>.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="https://cherrycode.com.br/img/cbrp.5a3ceb49.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex  items-center mt-20 gap-2">
                <Link
                  to="/"
                  className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-xs gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-white hover:text-black hover:border-0"
                >
                  Ir até o Site
                </Link>
                <Link
                  to={""}
                  className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                >
                  <FaTwitter />
                </Link>
                <Link
                  to="/"
                  className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-xs gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-white hover:text-black hover:border-0"
                >
                  <FaDiscord />
                </Link>
                <Link
                  to={""}
                  className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                >
                  <FaInstagram />
                </Link>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var gap-4">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white font-inter"
              >
                Cidade Bella
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 font-mulish font-normal"
              >
                Este site foi finalizado em <b>9 dias</b> para{" "}
                <b>CidadeBella</b>.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="https://cherrycode.com.br/img/cbrp.5a3ceb49.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex  items-center mt-20 gap-2">
                <Link
                  to="/"
                  className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-xs gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-white hover:text-black hover:border-0"
                >
                  Ir até o Site
                </Link>
                <Link
                  to={""}
                  className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                >
                  <FaTwitter />
                </Link>
                <Link
                  to="/"
                  className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-xs gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-white hover:text-black hover:border-0"
                >
                  <FaDiscord />
                </Link>
                <Link
                  to={""}
                  className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                >
                  <FaInstagram />
                </Link>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>
    </>
  );
}

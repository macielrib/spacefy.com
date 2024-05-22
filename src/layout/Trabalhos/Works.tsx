import { Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import { FaTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Analytics } from "@vercel/analytics/react";
import { TiArrowBack } from "react-icons/ti";
import { GiTowTruck } from "react-icons/gi";
import { HiOutlineExternalLink } from "react-icons/hi";


export function Works() {
  return (
    <>
      <section className="bg-black py-12 ">
        <div className="flex px-24 animate-fade-right animate-duration-[4000ms]">
          <Link
            to="/"
            className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-sm gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-white hover:text-black hover:border-0 "
          >
            Retornar <TiArrowBack className="mt-[0.2rem]" />
          </Link>
        </div>
        <div className="flex flex-col items-center text-center animate-fade-down animate-duration-[2000ms]">
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
          <p className="text-[#444] font-inter font-medium text-sm mt-4">(alguns sites estão indisponíveis para ver por opções de clientes)</p>
        </div>
       
        <div className="flex justify-center gap-4 -mb-16 flex-wrap">
          <div>
            <CardContainer className="inter-var gap-4">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white font-inter"
                >
                  Pulsecode
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 font-mulish font-normal"
                >
                  Este site foi finalizado em <b>4 dias</b> para{" "}
                  <b>Pulsecode &copy;</b>.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src="https://cdn.discordapp.com/attachments/1241900073936228512/1242116829464363039/image.png?ex=664ea531&is=664d53b1&hm=5cb0cf266164e09aee6d11a5352aad600915415a494cdbba4b7b682ff972c20b&"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex items-center mt-20 gap-2 justify-center">
                  <Link
                    to={""}
                    className="flex font-poppins text-white bg-[#171717] rounded-lg border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                       to={""}
                       className="flex font-poppins text-white bg-[#171717] rounded-lg border-solid border-[#313131] py-2 px-6 text-xs gap-2 transition-all duration-300 font-medium cursor-default opacity-50"
                  >
                    <FaDiscord />
                  </Link>
                  <Link
                    to={""}
                    className="flex font-poppins text-white bg-[#171717] rounded-lg border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                  >
                    <FaInstagram />
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
          </div>

          <div>
            <CardContainer className="inter-var gap-4">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white font-inter"
                >
                  HyriumNetwork
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 font-mulish font-normal"
                >
                  Este site foi finalizado em <b>9 dias</b> para{" "}
                  <b>Hyrium &copy;</b>.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src="https://cdn.discordapp.com/attachments/1241900073936228512/1242119042362245172/image.png?ex=664ea741&is=664d55c1&hm=c244ca063199f5356c825a6fec32e14814d5cb1de46868e14c045d43811a39be&"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex items-center mt-20 gap-2 justify-center">
                  <Link
                    to={""}
                    className="flex font-poppins text-white bg-[#171717] rounded-lg border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                       to={""}
                       className="flex font-poppins text-white bg-[#171717] rounded-lg border-solid border-[#313131] py-2 px-6 text-xs gap-2 transition-all duration-300 font-medium cursor-default opacity-50"
                  >
                    <FaDiscord />
                  </Link>
                  <Link
                    to={""}
                    className="flex font-poppins text-white bg-[#171717] rounded-lg border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                  >
                    <FaInstagram />
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
          </div>
          <div>
            <CardContainer className="inter-var gap-4">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white font-inter"
                >
                  fineMetrics
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 font-mulish font-normal"
                >
                  Este site foi finalizado em <b>6 dias</b> para{" "}
                  <b>fineMetrics &copy;</b>.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src="https://cdn.discordapp.com/attachments/1239202234265370624/1242823755844288665/image.png?ex=664f3d51&is=664debd1&hm=f339fef0ae87b38f26d8cf7d9f4599739aa7e191275c4a6c298431fefd97c8a5&"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex items-center mt-20 gap-2 justify-center">
                  <Link
                    to={""}
                    className="flex font-poppins text-white bg-[#171717] rounded-lg border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                       to={""}
                       className="flex font-poppins text-white bg-[#171717] rounded-lg border-solid border-[#313131] py-2 px-6 text-xs gap-2 transition-all duration-300 font-medium cursor-default opacity-50"
                  >
                    <FaDiscord />
                  </Link>
                  <Link
                    to={""}
                    className="flex font-poppins text-white bg-[#171717] rounded-lg border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    to={"https://finemetrics.vercel.app"}
                    target="_blank"
                    className="flex font-poppins text-white bg-[#111] rounded-sm border-solid border-[#313131] py-2 px-6 text-xs gap-2 transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1"
                  >
                    <HiOutlineExternalLink />
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
          <div>
            <CardContainer className="inter-var gap-4">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white font-inter"
                >
                  JW Saraiva
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 font-mulish font-normal"
                >
                  Este site foi finalizado em <b>3 dias</b> para{" "}
                  <b>Grupo JW &copy;</b>.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src="https://cdn.discordapp.com/attachments/1241900073936228512/1242119298172981308/image.png?ex=664ea77e&is=664d55fe&hm=9ce924060b7e797681b48e5c768b867dbf5ee33c4a8fee7fe182a859143480ac&"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex items-center mt-20 gap-2 justify-center">
                  <Link
                    to={""}
                    className="flex font-poppins text-white bg-[#171717] rounded-lg border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                       to={""}
                       className="flex font-poppins text-white bg-[#171717] rounded-lg border-solid border-[#313131] py-2 px-6 text-xs gap-2 transition-all duration-300 font-medium cursor-default opacity-50"
                  >
                    <FaDiscord />
                  </Link>
                  <Link
                    to={""}
                    className="flex font-poppins text-white bg-[#171717] rounded-lg border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                  >
                    <FaInstagram />
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
          </div>

          <div>
            <CardContainer className="inter-var gap-4">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white font-inter"
                >
                  Amazing Studios
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 font-mulish font-normal"
                >
                  Este site foi finalizado em <b>7 dias</b> para{" "}
                  <b>Amazing &copy;</b>.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src="https://cdn.discordapp.com/attachments/1241900073936228512/1242116702167109662/image.png?ex=664ea513&is=664d5393&hm=f1895054038fd05be3ae0f69fedf49c396c9b73315d238a2f199d7c5eee60f37&"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer"
                    alt="thumbnail"
                
                  />
                </CardItem>
                <div className="flex items-center mt-20 gap-2 justify-center">
                  <Link
                    to={""}
                    className="flex font-poppins text-white bg-[#171717] rounded-lg border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                       to={""}
                       className="flex font-poppins text-white bg-[#171717] rounded-lg border-solid border-[#313131] py-2 px-6 text-xs gap-2 transition-all duration-300 font-medium cursor-default opacity-50"
                  >
                    <FaDiscord />
                  </Link>
                  <Link
                    to={""}
                    className="flex font-poppins text-white bg-[#171717] rounded-lg border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                  >
                    <FaInstagram />
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
          </div>
          <div>
            <CardContainer className="inter-var gap-4">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white font-inter"
                >
                  SpaceLabs
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 font-mulish font-normal"
                >
                  Este site foi finalizado em <b>11 dias</b> para{" "}
                  <b>SpaceLabs &copy;</b>.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src="https://cdn.discordapp.com/attachments/1241900073936228512/1242118413996920852/image.png?ex=664ea6ab&is=664d552b&hm=38146041bdb917bbc13c8f4bb8e2cb7af740f3d55f3754e32b72c46491a62c1a&"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer"
                    alt="thumbnail"
                
                  />
                </CardItem>
                <div className="flex items-center mt-20 gap-2 justify-center">
                  <Link
                    to={""}
                    className="flex font-poppins text-white bg-[#171717] rounded-lg border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                   to={""}
                    className="flex font-poppins text-white bg-[#171717] rounded-lg border-solid border-[#313131] py-2 px-6 text-xs gap-2 transition-all duration-300 font-medium cursor-default opacity-50"
                  >
                    <FaDiscord />
                  </Link>
                  <Link
                    to={""}
                    className="flex font-poppins text-white bg-[#171717] rounded-lg border-solid border-[#313131] py-2 px-6 text-xs gap-2 cursor-default opacity-50"
                  >
                    <FaInstagram />
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
          </div>
          <Analytics />
        </div>
        <div className="flex flex-col items-center py-12 text-center animate-fade-down animate-duration-[2000ms]">
          <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-white max-w-screen-xl">
            Interessado em Algo?
            <br />{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#daabff] to-[#5723ac]">
              Vamos Conversar!
            </span>
          </h1>
          <p className="text-[#9e9e9e] font-inter font-normal leading-normal text-sm mt-4 max-w-screen-sm">
            Gostou do que viu? Nossa equipe está pronta para criar um site
            incrível para você. Fale conosco e comece seu projeto agora.
          </p>
          <div className="flex gap-4 py-6 animate-fade-down animate-duration-[2000ms]">
            <Link
              to="https://discord.gg/FvdjMVun5X"
              target="_blank"
              className="flex font-poppins text-white bg-indigo-800 rounded-lg py-2 px-6 text-sm gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-white hover:text-black hover:border-0 items-center"
            >
              Solicitar Agora <GiTowTruck></GiTowTruck>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

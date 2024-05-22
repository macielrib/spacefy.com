import { GiFizzingFlask, GiJusticeStar } from "react-icons/gi";
import { MdContacts } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/moving-border";
import { ContactUs } from "./ContactUs";
import { NossosTrabalhos } from "./NossosTrabalhos";
import { QuemSomos } from "./QuemSomos";
import { Reviews } from "./Reviews";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HERO_IMAGES = [
  "/sliders/AmazingEmpresarial.png",
  "/sliders/JWConstitucional.png",
  "/sliders/LabsPainelDeControle.png",
  "/sliders/Pulsecode.png",
  "/sliders/TwistyJogo.png",
];

export function HeroSection() {
  return (
    <>
      <section>
        <div className="h-full w-full bg-black flex flex-col items-center justify-center py-6 ">
          <div className="text-center max-w-md lg:max-w-screen-xl ">
            <div className="animate-fade-left animate-duration-[2000ms]">
              <Button
                borderRadius="1.75rem"
                className="bg-[ #171717] text-white font-inter font-semibold border-[#333] gap-2 "
              >
                Sites de Sucesso{" "}
                <GiJusticeStar className="animate-spin duration-1000 delay-1000 text-indigo-600 text-lg" />
              </Button>
            </div>

            <div className="animate-fade-down animate-duration-[2000ms]">
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
          </div>
          <div className="flex justify-center text-center py-6 gap-4 px-6 flex-wrap ">
            <div className="animate-fade-right animate-duration-[3000ms]">
              <Link
                to="https://discord.gg/grv9szCdHe"
                target="_blank"
                className="flex font-poppins text-white bg-indigo-800 rounded-lg py-2 px-6 text-sm gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-white hover:text-black hover:border-0 "
              >
                Começar Agora! <GiFizzingFlask className="mt-[0.2rem]" />
              </Link>
            </div>
            <div className="animate-fade-left animate-duration-[4000ms]">
              <Link
                to="https://discord.com/invite/grv9szCdHe"
                target="_blank"
                className="flex font-poppins text-white bg-[#171717] rounded-lg  border-solid border-[#313131] py-2 px-6 text-sm gap-2 transition-all duration-300 font-medium hover:-translate-y-1 hover:bg-white hover:text-black hover:border-0 "
              >
                Falar Conosco <MdContacts className="mt-[0.2rem]" />
              </Link>
            </div>
          </div>
          <div className="py-8 px-6 animate-fade-right animate-duration-[2000ms]">
            <Carousel
              interval={4000}
              autoPlay
              infiniteLoop
              swipeable={false}
              showThumbs={false}
              showArrows={false}
              showIndicators={false}
              showStatus={false}
            >
              {HERO_IMAGES.map((image, index) => (
                <div key={index} className="p-4">
                  <img
                    src={image}
                    className="max-w-[1280px] max-h-[720px] overflow-hidden rounded-2xl shadow-[0_0px_15px_3px_rgb(61,61,61,0.8)] select-none"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <QuemSomos />
        <NossosTrabalhos />
        <Reviews />
        <ContactUs />
      </section>
    </>
  );
}

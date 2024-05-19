import { WobbleCard } from "../../components/ui/wobble-card";

export function QuemSomos() {
  return (
    <>
      <section className="bg-black py-6">
        <div className="flex flex-col items-center py-12 text-center">
          <h1 className="text-[#daabff] text-md font-mulish font-semibold ">
            Experiência & Inovação
          </h1>
          <h1 className="font-poppins font-bold text-4xl lg:text-7xl text-white max-w-screen-xl">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full px-6">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-purple-800 min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white font-mulish">
                Entrega Rápida e Qualidade Impecável.
              </h2>
              <p className="mt-4 text-left  text-base/6 font-mulish font-medium leading-normal text-white">
                Receba seu site rapidamente com qualidade impecável. Superando
                expectativas com mais de 10.000 clientes!
              </p>
            </div>
            <img
              src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=640&q=75"
              width={600}
              height={600}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px]">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white font-mulish">
              Preços Baixos, Qualidade Alta.
            </h2>
            <p className="mt-4 text-left  text-base/6 font-mulish font-medium leading-normal text-white">
              Sites de alta qualidade a preços acessíveis. A sua excelência
              garantida!
            </p>
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-indigo-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white font-mulish">
                Hospedagem Gratuita e Suporte Magnífico.
              </h2>
              <p className="mt-4 text-left  text-base/6 font-mulish font-medium leading-normal text-white">
                Hospede seu site gratuitamente com suporte excepcional. Sua
                satisfação garantida!
              </p>
            </div>
            <img
              src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=640&q=75"
              width={600}
              height={600}
              alt="linear demo image"
              className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
        </div>
      </section>
    </>
  );
}

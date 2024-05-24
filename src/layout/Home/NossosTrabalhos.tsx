import { Reveal } from "../../components/motion/RevealScroll";
import { Tabs } from "../../components/ui/tabs";

export function NossosTrabalhos() {
  const tabs = [
    {
      title: "Sites para Lojas",
      value: "hospedagem",
      content: (
        <>
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 lg:bg-[#171717] lg:border-4 lg:border-solid lg:border-[#171717] lg:bg-[url('/portfolio/png/Pulsecode.png')] lg:bg-no-repeat lg:bg-cover">
            <div className="lg:hidden">
              <LojasImagem />
            </div>
          </div>
        </>
      ),
    },

    {
      title: "Site Empresarial",
      value: "empresarial",
      content: (
        <>
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 lg:bg-[#171717] lg:border-4 lg:border-solid lg:border-[#171717] lg:bg-[url('/portfolio/png/AmazingEmpresarial.png')] lg:bg-no-repeat lg:bg-cover">
            <div className="lg:hidden">
              <EmpresarialImagem />
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Site para Jogos",
      value: "jogos",
      content: (
        <>
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 lg:bg-[#171717] lg:border-4 lg:border-solid lg:border-[#171717] lg:bg-[url('/portfolio/png/TwistyJogo.png')] lg:bg-no-repeat lg:bg-cover">
            <div className="lg:hidden">
              <JogosImagem />
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Site Constitucional",
      value: "constitucional",
      content: (
        <>
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 lg:bg-[#171717] lg:border-4 lg:border-solid lg:border-[#171717] lg:bg-[url('/portfolio/png/JWConstitucional.png')] lg:bg-no-repeat lg:bg-cover">
            <div className="lg:hidden">
              <ConstitucionalImagem />
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Painel de Controle",
      value: "controle",
      content: (
        <>
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 lg:bg-[#171717] lg:border-4 lg:border-solid lg:border-[#171717] lg:bg-[url('/portfolio/png/LabsPainelDeControle.png')] lg:bg-no-repeat lg:bg-cover">
            <div className="lg:hidden">
              <PainelImagem />
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <section className="bg-black py-12">
        <Reveal>
        <div className="flex flex-col lg:items-start py-12 lg:px-16 text-center lg:text-start animate-fade-down animate-duration-[2000ms]">
          <div className="px-6">
            <h1 className="text-[#daabff] text-md font-mulish font-semibold ">
              Moderno & Capacitado
            </h1>
            <h1 className="font-poppins font-bold text-4xl lg:text-7xl text-white ">
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
          </div>
          <div className="h-[640px] md:h-[640px] [perspective:62.5rem] relative flex flex-col  w-full  items-start justify-start py-4 px-2">
            <Tabs tabs={tabs} />
          </div>
        </div>
        </Reveal>
      </section>
    </>
  );
}

const LojasImagem = () => {
  return (
    <img
      src="/portfolio/png/Pulsecode.png"
      alt="LojasImagem"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const EmpresarialImagem = () => {
  return (
    <img
      src="/portfolio/png/AmazingEmpresarial.png"
      alt="EmpresarialImagem"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const JogosImagem = () => {
  return (
    <img
      src="/portfolio/png/TwistyJogo.png"
      alt="JogosImagem"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const ConstitucionalImagem = () => {
  return (
    <img
      src="/portfolio/png/JWConstitucional.png"
      alt="ConstitucionalImagem"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const PainelImagem = () => {
  return (
    <img
      src="/portfolio/png/LabsPainelDeControle.png"
      alt="PainelImagem"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

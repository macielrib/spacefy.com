import { Tabs } from "../../components/ui/tabs";

export function NossosTrabalhos() {
  const tabs = [
    {
      title: "Sites para Lojas",
      value: "hospedagem",
      content: (
        <>
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 lg:bg-[#171717] lg:border-4 lg:border-solid lg:border-[#171717] lg:bg-[url('assets/tabs/Pulsecode.png')] lg:bg-no-repeat lg:bg-cover">
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
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 lg:bg-[#171717] lg:border-4 lg:border-solid lg:border-[#171717] lg:bg-[url('assets/tabs/AmazingEmpresarial.png')] lg:bg-no-repeat lg:bg-cover">
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
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 lg:bg-[#171717] lg:border-4 lg:border-solid lg:border-[#171717] lg:bg-[url('assets/tabs/TwistyJogo.png')] lg:bg-no-repeat lg:bg-cover">
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
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 lg:bg-[#171717] lg:border-4 lg:border-solid lg:border-[#171717] lg:bg-[url('assets/tabs/JWConstitucional.png')] lg:bg-no-repeat lg:bg-cover">
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
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 lg:bg-[#171717] lg:border-4 lg:border-solid lg:border-[#171717] lg:bg-[url('assets/tabs/LabsPainelDeControle.png')] lg:bg-no-repeat lg:bg-cover">
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
      </section>
    </>
  );
}

const LojasImagem = () => {
  return (
    <img
      src="https://cdn.discordapp.com/attachments/1241900073936228512/1242116829464363039/image.png?ex=664caaf1&is=664b5971&hm=5d2f701f4460c9b78723ce4d51ad1ec0a6f521533a7b28c9f3fcb946bc1f254b&tabs/Pulsecode.png"
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
      src="https://cdn.discordapp.com/attachments/1241900073936228512/1242116702167109662/image.png?ex=664caad3&is=664b5953&hm=277b2f67bec3d68bf4dbc84794908039540eb7163abc1363e942bf16477dc965&"
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
      src="https://media.discordapp.net/attachments/1241900073936228512/1242119042362245172/image.png?ex=664cad01&is=664b5b81&hm=8f4891fbe12649f441ef3d7463298084abccd3873d93202811651da8738ef627&=&format=webp"
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
      src="https://cdn.discordapp.com/attachments/1241900073936228512/1242119298172981308/image.png?ex=664cad3e&is=664b5bbe&hm=72842029592b1b06c3637c2c09f776278d630beffe5f2b93fe5ba8aeec80cbb0&"
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
      src="https://cdn.discordapp.com/attachments/890414849476165713/1241818371671199755/image.png?ex=664ce67b&is=664b94fb&hm=81df0ab953ee110dec36f488880df879ead3321e9344b6590371677b20eabbd9&"
      alt="PainelImagem"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

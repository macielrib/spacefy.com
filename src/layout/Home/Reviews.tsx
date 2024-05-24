import { Reveal } from "../../components/motion/RevealScroll";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";
import { FaTwitter } from "react-icons/fa";

export function Reviews() {
    return (
        <>
      <section className="bg-black py-6">
        <Reveal>
        <div className="flex flex-col items-center py-12 text-center px-16 lg:items-start lg:text-left animate-fade-down animate-duration-[2000ms]">
          <h1 className="text-[#daabff] text-md font-mulish font-semibold ">
            Recomendado & Confiável
          </h1>
          <h1 className="font-poppins font-bold text-4xl lg:text-7xl text-white max-w-screen-xl">
            Qualidade Garantida,
            <br />{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#daabff] to-[#5723ac]">
              Clientes Satisfeitos.
            </span>
          </h1>
          <p className="text-[#9e9e9e] font-inter font-normal leading-normal text-md mt-4 max-w-screen-sm">
          Nossos clientes confiam na qualidade dos nossos serviços. Veja os depoimentos que refletem nossa dedicação e excelência em cada projeto.
          </p>
          
        </div>
        </Reveal>
        <Reveal>
       <div>
    
       <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
     
      />
       </div>
       </Reveal>
      
      </section>
        </>
    )
}

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta aperiam modi itaque? At molestias odit voluptatibus mollitia hic consequuntur non ut, voluptatem saepe sed ad voluptates, excepturi blanditiis libero.",
    name: "@mosaic",
    icon: <FaTwitter />,  
    title:  `@JW Saraiva`,
   
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta aperiam modi itaque? At molestias odit voluptatibus mollitia hic consequuntur non ut, voluptatem saepe sed ad voluptates, excepturi blanditiis libero.",
    name: "@vitinholucasofc",
    icon: <FaTwitter />,  
    title:  `@HyriumNetwork`,
   
  },

  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta aperiam modi itaque? At molestias odit voluptatibus mollitia hic consequuntur non ut, voluptatem saepe sed ad voluptates, excepturi blanditiis libero.",
    name: "@Galaxy",
    icon: <FaTwitter />,  
    title:  `@Coldfy`,
   
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta aperiam modi itaque? At molestias odit voluptatibus mollitia hic consequuntur non ut, voluptatem saepe sed ad voluptates, excepturi blanditiis libero.",
    name: "@JuanFreitas",
    icon: <FaTwitter />,  
    title:  `@_juanfreitas`,
   
  },
];
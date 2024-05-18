/* eslint-disable prefer-const */
"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn";

export const TextGenerateEffectTwo = ({
  text,
  className,
}: {
  text: string;

  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = text.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.4),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
         <>
            <motion.span
              key={word + idx}
              className="opacity-0 text-white font-bold text-7xl"
            >
              {word}{" "}
            </motion.span>
    
         </>
            
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" !dark:text-purple-500 text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

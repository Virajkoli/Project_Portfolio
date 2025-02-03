import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative h-screen w-full mx-auto">
      <div
        className={`${styles.paddingX} inset-0 top-[120px] absolute mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hii i am <span className="text-[#915eff]">Viraj</span>
          </h1>
          <p className={`${styles.heroSubText}`}>I am a MERN stack developer</p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;

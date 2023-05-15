"use client";
import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

import artwork from "../../../public/img/Untitled_Artwork-4-6.png";
import Image from "next/image";

const Hero = () => {
  const [texto, setTexto] = useState({
    title: "Jugando",
    text: "Entendemos la importancia del juego para desarrollar habilidades",
  });
  const cambiarTexto = () => {
    // Crea una nueva copia del objeto texto y actualiza solo la propiedad que deseas cambiar
    setTexto((prevTexto) => ({
      ...prevTexto,
      title: prevTexto.title === "Jugando" ? "Cantando" : "Jugando",
      text:
        prevTexto.text ===
        "Entendemos la importancia del juego para desarrollar habilidades"
          ? "Utilizando la musica como motor"
          : "Entendemos la importancia del juego para desarrollar habilidades",
    }));
  };

  // setInterval(cambiarTexto, 3000);

  return (
    <section className="h-auto w-full mb-8 xl:mb-24 overflow-hidden">
      <div className="bg-gradient-to-r from-[#6EC1E4] via-[#73ddeb] to-[#61CE70] w-full h-auto min-h-[80vh] flex items-center relative justify-center">
        <div className="bg-gradient-to-r from-white/10 to-transparent rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[100%] w-[100%]"></div>
        <div className="flex z-10 flex-col md:flex-row md:items-center md:justify-center py-10">
          <div className="lg:ml-8 xl:ml-[135px] flex items-center lg:items-center text-center lg:text-left justify-center flex-1 px-4 lg:px-0 text-white md:w-1/2 lg:w-auto">
            <motion.div
              initial={{
                x: 200,
                opacity: 0,
              }}
              transition={{
                duration: 2,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              key={texto.title}
              className="text-center pb-6"
            >
              <h4 className="font-bold text-6xl md:text-9xl">{texto.title}</h4>
              <p className="max-w-[480px] mb-8 py-4">{texto.text}</p>
            </motion.div>
          </div>

          <motion.div className="flex-1 flex justify-center mt-auto md:mt-0 mb-6 md:mb-0">
            <button className="bg-white cursor-pointer py-6 px-8 rounded-full text-gray-800 font-medium hover:border-2 hover:border-yellow-500/50 border-dashed flex items-center ml-4  hover:text-yellow-500/80 transition duration-300 ease-in-out absolute bottom-0">
              <HiArrowNarrowRight className="mr-2" size={40} />
              <span className="text-xl">Inscríbete Ahora</span>
            </button>
          </motion.div>

          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="flex-1 lg:flex md:justify-end md:items-end flex-col lg:items-center lg:justify-between mb-0 md:w-1/2 lg:w-auto"
          >
            <Image
              src={artwork}
              alt="Artwork"
              height={1200}
              width={1200}
              className="w-auto h-auto min-h-[120px] object-contain"
            />
          </motion.div>
        </div>
        <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;

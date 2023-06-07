"use client";
import React, { useState } from "react";
import { HiArrowNarrowRight, HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import artwork from "../../../public/img/Untitled_Artwork-4-6.png";
import artwork2 from "../../../public/img/Untitled_Artwork-3-1.png"
import Image from "next/image";
import styles from "../../styles/Hero.module.css"


const Hero = () => {
  const [texto, setTexto] = useState({
    N:1,
    title: "Aprende jugando",
    text: " Entendemos el juego como una actividad esencial para estimular la creatividad, la imaginación y el pensamiento crítico.",
  });

  const [reloadAnimation,setReloadAnimation]=useState<boolean>(true)
 
  const cambiarTexto = () => {
    // Crea una nueva copia del objeto texto y actualiza solo la propiedad que deseas cambiar
    const firstText={
      N:1,
      title: "Aprende jugando",
      text: " Entendemos el juego como una actividad esencial para estimular la creatividad, la imaginación y el pensamiento crítico.",
    }
    const secondText={
      N:2,
      title:'Aprende cantando',
      text:'La música es la herramienta principal que empleamos para impulsar el aprendizaje.'
    }
    const changeText= texto.N===1?secondText:firstText
    setReloadAnimation(false)
    setTimeout(() => {///para que la animacion vuelva a funcionar al cambiar de texto/seccion
      setTexto(changeText)
      setReloadAnimation(true)
    }, 1);

  };

  // setInterval(cambiarTexto, 3000);

  return (
    <div className={` ${styles.Container} h-[25rem] flex flex-col items-center relative `}>
    
         {reloadAnimation&& <article className={`z-20 w-full h-[8rem] flex items-center justify-center`}>
            <h1 className='text-7xl'>{texto.title}</h1>
          </article>
          }
          {reloadAnimation&&<article className=" z-20 w-full h-[5rem] flex justify-center ">
            <span className=" w-[35rem] text-center">{texto.text}</span>
          </article>}
   
        <article className="z-20 absolute bottom-[30%]">
            <button className="relative bg-white w-44 h-14 rounded-full text-black p-2">
              <HiArrowRight className="absolute top-[35%] text-orangeicons"/> 
              <span>
                Inscribete ahora
              </span>  
            </button>
          </article>
     {texto.N===2&& <button onClick={cambiarTexto}
       className="z-20 bg-black text-white absolute left-[1%] top-[45%] rounded-full w-[2.5rem] h-[2.5rem] text-xl flex items-center justify-center">
        &lt;
      </button>}

    { texto.N===1&& <button onClick={cambiarTexto}
       className="z-20 bg-black text-white absolute right-[1%] top-[45%] rounded-full w-[2.5rem] h-[2.5rem] text-xl flex items-center justify-center">
        &gt;
      </button>}
      
     {texto.N===1&& <Image alt="Cjimage"  src={artwork} className={`${styles.Image} absolute z-10 h-full w-auto right-[5%]`} />}
     {texto.N===2&& <Image alt="Cjimage"  src={artwork2} className={`${styles.Image} absolute z-10 h-full w-auto right-[5%]`} />}
    </div>
  );
};

export default Hero;

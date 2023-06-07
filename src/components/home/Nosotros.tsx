import Image from "next/image";
import {HiArrowDown } from "react-icons/hi";
import image from '../../../public/img/image3.png'
import {useState} from 'react'
import styles from '../../styles/Nosotros.module.css'
import YouTube from "react-youtube";
const videoId = "jqLaRv0fuXc";
export default function Nosotros(){
    const [seeAbout,setSeeAbout]=useState(false);
    const [seeUsDream,setSeeUsDream]=useState(false);

    const setAbout=()=>{
        setSeeUsDream(false)
        setSeeAbout(!seeAbout)
    }
    const setUsDream=()=>{
        setSeeAbout(false)
        setSeeUsDream(!seeUsDream)
    }
   

    return (
        <div className={`${styles.Container} h-[20rem] w-full flex justify-between`} id="Nosotros">
            <section className="flex flex-col justify-evenly items-center  w-6/12">
                <div className="relative">
                    <button value={'About'} onClick={setAbout}
                    className="w-[30rem] h-[4rem] rounded-xl relative bg-blue text-white hover:text-white ">
                        <span className="text-5xl">
                        Nosotros
                        </span>
                    <HiArrowDown className="absolute right-0 bottom-[20%] text-4xl text-orangeicons "/>
                    </button>
                    
                { seeAbout&&
                    <article className="absolute bg-[#FAFAFA] z-30 h-[12rem] border flex justify-center items-center">
                        <span className="w-9/12 text-center text-black">
                        CantaJuega Conmigo ha sido creado a partir del interés por el desarrollo y 
                        estimulación oportuna de la primera infancia con dificultades de aprendizaje 
                        y socialización debidos a una condición que afecta o altera su capacidad de hablar y comunicar. 
                        </span>
                    </article>}
                </div>
                
                <div className="relative">
                    <button value={'Us-dream'}  onClick={setUsDream}
                    className="w-[30rem] h-[4rem] rounded-xl relative bg-green text-white">
                        <span className="text-5xl">
                        Nuestro sueño
                        </span>
                        <HiArrowDown className="absolute right-0 bottom-[20%] text-4xl text-orangeicons "/>
                    </button>
                    { seeUsDream&&
                    <article className="absolute bg-[#FAFAFA] z-30 h-[12rem] border flex justify-center items-center">
                        <span className="w-9/12 text-center ">
                        Teniendo como sueño grupal proporcionar un novedoso método terapéutico especializado, 
                        con el más alto nivel en neuro educación,música, arte y el modelado 
                        de video para la atención de niños y niñas con dificultades en el desarrollo del lenguaje y/o aprendizaje.             
                        </span>
                    </article>}
                </div>

            </section>

            <section className="  flex items-center justify-center w-5/12">
                {/* <Image alt="cjimage" src={image}  className="h-5/6 w-10/12" /> */}
                <YouTube
            videoId={videoId}
            opts={{
              height: "100%",
              width: "100%",
              playerVars: {},
            }}
            className="h-5/6 w-full"
          />
            </section>
        </div>
    )
}
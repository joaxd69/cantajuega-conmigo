import Image from "next/image";
import { BsArrowLeft} from "react-icons/bs";
import image1 from '../../public/img/image 12.png'
import image2 from '../../public/img/Star 9.png'
import image3 from '../../public/img/Untitled_Artwork-3-1.png'
import styles from '../styles/Cancionero.module.css'
import {  useState } from "react";
import { IoMdDownload } from "react-icons/io";
import MusicsPlayers from "@/components/MusicsPlayers/MusicsPlayers";


export default function Cancionero(){
    const [login,setLogin]= useState<boolean>(false)

    const loginfalso=()=>setLogin(!login)

    const fakeaudios=[
        {cancion:'1',url:'https://res.cloudinary.com/daekdf1sh/video/upload/v1684967568/Wiz_Khalifa_Black_And_Yellow_GMix_ft_Snoop_Dogg_Juicy_J_TPain_ocicnm.mp3'},
        {cancion:'2',url:'https://res.cloudinary.com/daekdf1sh/video/upload/v1684982450/Drake_GODS_PLAN_rekoav.mp3'},
        {cancion:'3',url:'https://res.cloudinary.com/daekdf1sh/video/upload/v1684982471/Eminem_Lose_Yourself_jvueah.mp3'},
        {cancion:'4',url:'https://res.cloudinary.com/daekdf1sh/video/upload/v1684982550/Foster_The_People_Pumped_Up_Kicks_tcdrup.mp3'},
        {cancion:'5',url:'https://res.cloudinary.com/daekdf1sh/video/upload/v1684982590/Jack_Stauber_Buttercup_ndqobo.mp3'},
        {cancion:'6',url:'https://res.cloudinary.com/daekdf1sh/video/upload/v1684982550/Foster_The_People_Pumped_Up_Kicks_tcdrup.mp3'},
        {cancion:'7',url:'https://res.cloudinary.com/daekdf1sh/video/upload/v1684982590/Jack_Stauber_Buttercup_ndqobo.mp3'},
        {cancion:'8',url:'https://res.cloudinary.com/daekdf1sh/video/upload/v1684982550/Foster_The_People_Pumped_Up_Kicks_tcdrup.mp3'},
        {cancion:'9',url:'https://res.cloudinary.com/daekdf1sh/video/upload/v1684982590/Jack_Stauber_Buttercup_ndqobo.mp3'}
    ]

    return (
        <div className={`${login?`h-[55rem]`:` h-full `} bg-white ${styles.Container}`} >
              <section className=" relative bg-violet h-[10rem] w-full flex justify-center items-center ">
                <Image src={image1} alt="blueimage" className={`${styles.Image1}`}/>
                 <div className={`${styles.StarsContainer}`}>
                <Image className={`${styles.Star1}`} src={image2} alt="stars"/>
                <Image className={`${styles.Star2}`} src={image2} alt="stars"/>
                <Image className={`${styles.Star3}`} src={image2} alt="stars"/>
                 </div>
                <h1 className="  z-30 text-[#FFFFFF] text-4xl 2xl:text-8xl   xl:text-6xl lg:text-5xl  sm:text-5xl">Cancionero</h1>
            </section>
          
            <div className={`${login?'flex':'flex flex-col ' }`}>

               { login&& <MusicsPlayers Musics={fakeaudios}/>}

            <div className={`${styles.PublicContainer}`}>
           
            <section className='flex flex-col relative'>
                 <article className={`${login?``:`w-full h-[25rem] flex flex-col justify-center`}`}>
                   <p className=" z-50  text-center text-sm flex w-[45rem] 2xl:text-2xl   xl:text-xl lg:text-lg  sm:text-sm">
                   Nuestro cancionero es una colección de canciones únicas y originales creadas por nuestro 
                   talentoso equipo de cantantes y nuestro productor musical. Cada letra y melodía ha sido escrita 
                   específicamente para adaptarse a la etapa de desarrollo en la que se encuentran las niñas y niños,
                   lo que las hace hermosas, divertidas y sobre todo educativas. Nos enorgullece decir que nuestras canciones
                   están llenas de amor y pasión por lo que hacemos, y esperamos que puedan disfrutarlas tanto como 
                   nosotros disfrutamos en su creación.
                   </p>
                 </article>
                 <Image className={`${login?styles.Image3B :styles.Image3} z-1`} src={image3} alt="bg-cj"/>
                 <article className="w-full flex justify-center">
                   {login?
                   <button className="flex items-center justify-center border-[2px] bg-[#FFFFFF] border-orangeicons w-[18rem] rounded-lg p-2 ">
                        <span className=" w-8/12">Descargar cancionero</span>
                        <span className=" text-black  w-1/12"> <IoMdDownload className=" text-2xl" /> </span>
                     </button>:
                   <button className="flex items-center justify-center bg-blue w-[20rem] rounded-full text-[#FFFFFF]">
                        <span className=" text-orangeicons w-1/12"><BsArrowLeft/> </span>
                        <span className=" w-10/12">Inscríbete para acceder a nuestro contenido</span>
                   </button>
                    }
                 </article>
            </section>
            </div>
       </div>
          <button onClick={loginfalso}>Vista de logueado</button>
        </div>
    )
}
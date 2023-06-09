"use client";

import React, { useState ,useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/Navbar.module.css'
import Topnav from "./Topnav";
import {TiArrowDown} from "react-icons/ti";
import logo from '../../../public/img/Logo.png'
import {HiOutlineMenu } from "react-icons/hi";
import { useAppSelector } from "@/context/store";
const Navbar = () => {
  
  const auth=useAppSelector(state=>state.authReducer.isAuthenticated)
  const items = [
    { name: "Nosotros", href: "/#Nosotros" },
    { name: "Metodología", href: "/#metodologia" },
    { name: "Contacto", href: "/#contacto" ,subhref:'/Cuestionario'},
    { name: "Cancionero", href: "/Cancionero" },
    { name: "Membresías", href: "/membresias" },
    { name: "Cursos", href: "/Cursos" },
  ];
  const itemsauth =auth?[
    { name: "Nosotros", href: "/#Nosotros" },
    { name: "Metodología", href: "/#metodologia" },
    { name: "Contacto", href: "/#contacto" ,subhref:'/Cuestionario'},
    { name: "Cancionero", href: "/Cancionero" },
    { name: "Membresías", href: "/membresias" },
    { name: "Cursos", href: "/Cursos" },
    { name: "Mis cursos", href: "/Miscursos" },

  ] :items;
  const [menu, setMenu] = useState(false); // -> Menu hamburguesa
  
  useEffect(()=>{
    const body= document.getElementById('Body') as HTMLBodyElement;
    menu? body.style.overflow='hidden' :
           body.style.overflow='auto'

    return()=>{
       body.style.overflow='auto'
      }
  },[menu])

  useEffect(() => {//para evitar pequenio bug al tener abierto el menu hamburguesa y pasar a pantalla grande(estado menu quedaba en true, y por lo tanto desaparecia barra scroll)
    let controlate=menu
    const ejecutarEnPantallaCompleta=()=> {
      if (window.innerWidth > 945  &&controlate) {
        setMenu(false)
      }
    }
    window.addEventListener('resize', ejecutarEnPantallaCompleta);
    return () => {
      window.removeEventListener('resize', ejecutarEnPantallaCompleta);
    };
  }, [menu]); 

  const openMenu=()=>{
    setMenu(!menu)
  }
  const closeMenu=()=>{
    setMenu(false)
  }
  
  let visiblemenu=menu?'left-0 z-50':'left-[-200%] '

  return (
    <nav id="NavMenu" className={`${styles.Container}  w-full h-[8rem]
       lg:h-[9rem] flex flex-col  `} >

      <div className="w-full h-2/6 flex flex-col z-50
      min-[940px]:h-2/6 min-[940px]:flex min-[940px]:flex-col
      landscape:min-[500px]:z-0">
          <Topnav/>
      </div>

      <div className="flex w-full h-4/6 items-center relative
         min-[940px]:hidden">
          <HiOutlineMenu  className=" text-5xl cursor-pointer" onClick={openMenu}/>
          <Image src={logo} alt='logo-cj' className="absolute right-0 h-full w-auto z-[-1100]"/>
      </div>

      <div id="menunav" className={`fixed  z-40 w-11/12  h-full bg-blue bg-opacity-70  ${visiblemenu} transition-all duration-500
       min-[930px]:transition-none min-[930px]:duration-0
       min-[940px]:relative min-[940px]:left-0 min-[940px]:flex min-[940px]:justify-end min-[940px]:w-full min-[940px]:h-4/6 min-[940px]:bg-white
       md:w-6/12
       sm:w-6/12
       text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl  2xl:text-3xl`}>
          <button onClick={openMenu} className="absolute right-5  text-white text-4xl top-[10%] min-[940px]:hidden">&lt;</button>
           <Link href={'/'}> 
          <Image src={logo} alt="cj-logo" className="absolute left-0  top-0 hidden
          min-[940px]:absolute  min-[940px]:left-0  min-[940px]:top-0  min-[940px]:block
          md:w-[24%] md:top-[3%] md:h-auto md:max-h-[100%] 
          xl:w-auto xl:h-full xl:left-[5%] 2xl:left-[5%]  "/>
           </Link>

         <section className=" flex flex-col justify-end items-center  h-full  
          min-[940px]:w-full min-[940px]:flex min-[940px]:justify-end min-[940px]:flex-row">
            
            <div  className="  h-5/6  w-4/6 flex flex-col items-center justify-evenly 
             landscape:min-[500px]:h-full
             min-[940px]:w-[76%] min-[940px]:h-full min-[940px]:flex min-[940px]:flex-row 
             min-[940px]:items-center min-[940px]:justify-between
             xl:w-[70%] 2xl:w-[73%] min-[1930px]:w-[70%]">

            {itemsauth.map((i,key)=>
              
              <article key={key} className={`  w-full flex justify-center h-[7%] min-h-[2.5rem] group
                min-[940px]:w-auto min-[940px]:flex min-[940px]:h-auto min-[940px]:items-center
             ${auth&&`min-[940px]:last:bg-orangeicons`}  min-[940px]:last:p-2 min-[940px]:last:rounded-xl 
                max-[940px]  `}>
                
                <button className="border  relative font-fredoka font-semibold border-orangeicons w-4/5 max-w-[12rem] max-h-[4rem] flex
                max-[940px]:bg-white 
                min-[940px]:border-0 min-[940px]:w-auto min-[940px]:bg-auto
                landscape:min-[500px]:h-5/6
                ">
                  <Link href={i.href} onClick={closeMenu} className="  w-full h-full flex items-center justify-center">
                    {i.name}
                  </Link>
                    {i.subhref&&<TiArrowDown className="absolute right-[40%] top-[100%] hidden min-[940px]:block "/>}
                </button>
                {i.subhref&&
                <button className="absolute  bg-white h-fit border rounded-lg hidden 
                  min-[940px]:group-hover:block min-[940px]:h-full min-[940px]:top-[70%] ">
                  <Link href={i.subhref} className="border border-orangeicons rounded-lg p-1">
                  Cuestionario
                  </Link>
                </button>
                }    
              </article>
             )} 
              </div>
        </section>
      </div>

     
    </nav>
  );
};

export default Navbar;

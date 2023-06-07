"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/Navbar.module.css'
// USER
import Login from "./Login";
import Resgister from "./Register";
import { AUTH_MODAL_TYPE } from "@/utils";

//ICONS
import { HiOutlineMenu, HiUserAdd } from "react-icons/hi";
import {
  AiOutlineClose,
} from "react-icons/ai";
import {  BsArrow90DegDown, BsArrowBarDown, BsArrowDown, BsTelephone, BsYoutube } from "react-icons/bs";
import {  TiArrowDown, TiSocialFacebook} from "react-icons/ti";
import {  IoMdMail } from "react-icons/io";

const Navbar = () => {
  const items = [
    { name: "Nosotros", href: "/#Nosotros" },
    { name: "Metodología", href: "/#metodologia" },
    { name: "Contacto", href: "/contacto" ,subhref:'/Cuestionario'},
    { name: "Cancionero", href: "/Cancionero" },
    { name: "Membresías", href: "/membresias" },
    { name: "Cursos", href: "/Cursos" },
    {name:"Mis cursos",href:"/Miscursos"}
  ];

  interface OpenInterface {
    LOGIN: boolean;
    REGISTER: boolean;
  }
  const [openMenu, setOpenMenu] = useState(false); // -> Menu hamburguesa
  // const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const [open, setOpen] = useState<OpenInterface>({
    LOGIN: false,
    REGISTER: false,
  });

  const handleOpen = (name: AUTH_MODAL_TYPE) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [name]: !prevOpen[name],
    }));
  };

  return (
    <nav className="shadow-md w-full h-auto  top-0 left-0">
      {/* top nav */}
      <div className="hidden bg-white 2xl:w-full font-sans font-normal md:pb-5 md:flex md:top-0 md:w-auto md:px-4
       md:py-2 md:justify-end md:items-center  md:border-b-2 md:border-dashed 
        md:border-orangeicons  2xl:text-2xl   xl:text-xl lg:text-lg  sm:text-sm ">
        <section className="flex w-full justify-between lg:w-11/12 ">
          <div className="flex   justify-evenly w-7/12  ">
            <a href="https://wa.me/+50254301174?" target='_blank' className="flex items-center">
            <BsTelephone className="fill-current h-4 w-4 flex-shrink-0 mr-2 text-orangeicons" />
            <span className="">+502 5430-1174 </span>
            </a >
            <a href="mailto:info@cantajuegaconmigo.com" target='_blank' className="flex items-center">
            <IoMdMail className="fill-current h-4 w-4 flex-shrink-0 mr-2  text-orangeicons" />
            <span className="">info@cantajuegaconmigo</span>
            </a >
          </div>

          <div className="flex  space-x-4  items-center">
            <a href="https://www.youtube.com/@cantajuegaconmigo1543" target='_blank'>
            <BsYoutube className="text-[#FF0302] text-2xl"  />
            </a>
            <a href="https://www.facebook.com/cantajuegaconmigo" target='_blank'>
            <TiSocialFacebook className="text-[#1877F2] text-2xl" />
            </a>
            
            
            <span
              className="hover:text-[#FFC172] cursor-pointer flex"
              onClick={() => handleOpen(AUTH_MODAL_TYPE.LOGIN)}
            >
             <HiUserAdd className=" text-orangeicons transform scale-x-[-1] text-2xl" />
              Iniciar Sesión
            </span>
          </div>
        </section>
      </div>
      {/* top nav */}



      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center 
      text-gray-800"
        >
          <Link href={"/"}>
            <Image
              src="https://www.cantajuegaconmigo.com/wp-content/uploads/2021/11/NUEVO-LOGO.png"
              alt=""
              width={200}
              height={50}
              className=" gap-4 px-2 py-2"
            />
          </Link>
        </div>

        <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden ">
          {openMenu ? (
            <AiOutlineClose
              className="cursor-pointer"
              onClick={() => setOpenMenu(false)}
            />
          ) : (
            <HiOutlineMenu
              className="cursor-pointer"
              onClick={() => setOpenMenu(true)}
            />
          )}
        </div>

        <ul
          className={` ${styles.List} md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[50] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            openMenu ? "top-20 " : "top-[-600px]"
          }`}
        >
          {items.map((item) => (
            <li key={item.name} className="md:ml-8 text-2xl md:my-0 my-7 w-fit z-50 relative">
              <Link
                href={item.href}
                className="text-black hover:text-yellow-500 duration-500 flex items-center "
              >
                {item.name}
                {item.subhref&&<TiArrowDown className=""/>}
              </Link>
              {item.subhref&&
                 <Link href={item.subhref}className={`${styles.SubHrefs} absolute hidden w-full bg-white h-[4rem] `} >
                 <span className=" text-lg border border-orange rounded-lg">  Cuestionario </span>
                 </Link>
                 }
            </li>
          ))}
          <button
            onClick={() => handleOpen(AUTH_MODAL_TYPE.LOGIN)}
            className="md:hidden bg-yellow-600 text-white  py-2 px-6 rounded md:ml-8 hover:bg-yellow-400 
                duration-500"
          >
            Iniciar sesión
          </button>
        </ul>
      </div>
      {open.LOGIN && <Login handleOpen={handleOpen} />}
      {open.REGISTER && <Resgister handleOpen={handleOpen} />}
    </nav>
  );
};

export default Navbar;

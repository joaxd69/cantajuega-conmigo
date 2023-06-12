import {HiUserAdd } from "react-icons/hi";
import {BsTelephone,BsYoutube } from "react-icons/bs";
import {TiSocialFacebook} from "react-icons/ti";
import {IoMdMail} from "react-icons/io";
import Login from "./Login";
import Resgister from "./Register";
import {AUTH_MODAL_TYPE} from "@/utils";
import {useState} from "react";

interface OpenInterface {
    LOGIN: boolean;
    REGISTER: boolean;
  }
export default function Topnav(){

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
        <div className=" bg-white w-full flex items-end sm:items-center font-sans font-normal
         border-b-2 border-dashed border-orangeicons h-full ">

        <section className="flex w-full justify-between ">
          
          <div className="flex   w-5/12 md:w-6/12 sm:justify-evenly">
            <a href="https://wa.me/+50254301174?" target='_blank' className="flex items-center">
            <BsTelephone className="fill-current h-4 w-4 flex-shrink-0 mr-2 text-orangeicons" />
            <span className="">+502 5430-1174 </span>
            </a >

            <a href="mailto:info@cantajuegaconmigo.com" target='_blank' className={`hidden md:flex md:items-center`} >
            <IoMdMail className="fill-current h-4 w-4 flex-shrink-0 mr-2  text-orangeicons" />
            <span >info@cantajuegaconmigo</span>
            </a >
            
          </div>

          <div className=" flex justify-around items-center md:w-3/12 w-7/12  ">
            
            <div className="flex justify-between items-center w-4/12 md:w-3/12   ">
              <a href="https://www.youtube.com/@cantajuegaconmigo1543" target='_blank'>
              <BsYoutube className="text-[#FF0302] text-3xl  md:text-2xl"  />
              </a>
              <a href="https://www.facebook.com/cantajuegaconmigo" target='_blank'>
              <TiSocialFacebook className="text-[#1877F2] text-4xl  md:text-3xl" />
              </a>
            </div>
            
            
            <span 
              className="hover:text-[#FFC172] cursor-pointer flex items-center "
              onClick={() => handleOpen(AUTH_MODAL_TYPE.LOGIN)}
            >
             <HiUserAdd className=" text-orangeicons transform scale-x-[-1] text-2xl" />
              Iniciar Sesión
            </span>
          </div>
        </section>
        {open.LOGIN && <Login handleOpen={handleOpen} />}
        {open.REGISTER && <Resgister handleOpen={handleOpen} />}
      </div>
    )
}
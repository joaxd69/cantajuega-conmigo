import { goToSubscribeMembreship } from "@/functions/memership.query";
import { Membership } from "@/types/membership.type";
import Image from "next/image";
import React, { MouseEventHandler } from "react";
import { BsFillPencilFill, BsPencil, BsPencilFill, BsPencilSquare, BsTrash, BsTrash2Fill, BsTrash3Fill } from "react-icons/bs";
import { FcDeleteColumn } from "react-icons/fc";
import { HiOutlinePencil, HiOutlinePencilAlt, HiPencil, HiPencilAlt } from "react-icons/hi";
import { TiDelete, TiDeleteOutline, TiEdit, TiPencil } from "react-icons/ti";

interface Props {
  membership: Membership;
  color: string;
  image: any;
  Admin?:boolean;
  onClick?:MouseEventHandler<SVGAElement>;
}

const MembershipCard = ({ membership, color, image,Admin,onClick}: Props) => {

    const handleSelectMembership = () => {
        goToSubscribeMembreship(membership.recurrenteId)
    }
    
  return (
    <div className={` p-2 flex flex-col w-full max-w-[18rem] h-[25rem] relative`} style={{backgroundColor:color}}>
    
   {  Admin&& <BsFillPencilFill  className="  z-30 absolute cursor-pointer right-0 top-0"/>}


  {Admin&&<BsTrash3Fill onClick={onClick} id={membership.id} className="absolute cursor-pointer left-0 top-0"/>}

      <section className="w-full h-[20%]  flex items-center relative">
        <h1 className=" w-3/6 text-white text-center text-2xl font-[Kristen ITC]">{membership.name}</h1>
        <Image src={image} alt="background"  className="h-[115%] bottom-0 w-auto absolute right-0"/>
      </section>

      <section className="bg-white flex flex-col w-full h-full justify-between">
     
       <article className="h-[55%]">

        {membership.therapeuticTools &&
          <p className="text-base h-[33%] text-center w-full justify-center flex items-center  border-b-2 border-dashed border-gray-400">
                Todas las herramientas terapéuticas para niñas y niños de 0 a 6
                años.
          </p>
          }
            {membership.videos &&
              <p  className="text-base h-[33%] text-center w-full justify-center flex items-center  border-b-2 border-dashed border-gray-400">
                Material de apoyo audiovisual.
              </p>
            }
            {!membership.videos &&
              <p className="text-base h-[33%] text-center w-full justify-center flex items-center  border-b-2 border-dashed border-gray-400">
                Todas las canciones infantiles por etapa de desarrollo.
              </p>
            }
            {membership.music ? (
              <p className="text-base h-[33%] text-center w-full justify-center flex items-center  border-b-2 border-dashed border-gray-400">
                Canciones del programa.
              </p>
            ) : null}
       </article>

          <article className={`flex h-[45%] text-[${color}] flex-col justify-center gap-2 items-center`}>
              <b className={` text-4xl text-[${color}]`}>Q {membership.price}</b>
              <h3>Cada cierto tiempo</h3>
             <button className=" bg-[#2C98F0]  text-white w-[50%] p-2  " onClick={handleSelectMembership}>
              seleccionar
             </button>
          </article>
      </section>
    
    </div>
  );
};

export default MembershipCard;

import { goToSubscribeMembreship } from "@/functions/memership.query";
import { Membership } from "@/types/membership.type";
import Image from "next/image";
import React from "react";

interface Props {
  membership: Membership;
  color: string;
  image: any;
}

const MembershipCard = ({ membership, color, image }: Props) => {

    const handleSelectMembership = () => {
        goToSubscribeMembreship(membership.id)
    }
  return (
    <article className={`bg-[${color}] p-1.5 rounded-2xl h-[25rem] lg:basis-1/4`}>
      <header className=" w-11/12 mx-auto h-20 flex items-end justify-between">
        <h1 className="font-[Kidz] text-4xl text-white ">{membership.name}</h1>
        <Image height={100} width={100} src={image} alt="" />
      </header>

      <div className="bg-white h-[79%] rounded-b-2xl p-3 text-gray-500 flex flex-col justify-between items-center">
        <div>
          {membership.therapeuticTools ? (
            <p className="text-base py-2 border-b-2 border-dashed border-gray-400">
              Todas las herramientas terapéuticas para niñas y niños de 0 a 6
              años.
            </p>
          ) : null}
          {membership.videos ? (
            <p className="text-base py-2 border-b-2 border-dashed border-gray-400">
              Material de apoyo audiovisual.
            </p>
          ) : (
            <p className="text-base py-2 border-b-2 border-dashed border-gray-400">
              Todas las canciones infantiles por etapa de desarrollo.
            </p>
          )}
          {membership.music ? (
            <p className="text-base py-2 border-b-2 border-dashed border-gray-400">
              Canciones del programa.
            </p>
          ) : null}
          <p className="text-lg py-2 ">
            Precio:{" "}
            <b>
              Q{membership.price} cada {membership.duration}
            </b>
            .
          </p>
        </div>
        <div>
          <button className="bg-blue text-white p-3 font-semibold rounded-xl w-60"
          onClick={handleSelectMembership}
          >
            SELECCIONA &gt;
          </button>
        </div>
      </div>
    </article>
  );
};

export default MembershipCard;

import styles from "../styles/Membresias.module.css";
import firstbackground from "../../public/img/Untitled_Artwork 3.png";
import secondbackground from "../../public/img/Untitled_Artwork 5.png";
import { Membership } from "@/types/membership.type";
import { useEffect, useState } from "react";
import { getAllMebreships } from "@/functions/memership.query";
import MembershipCard from "@/components/membership/MembershipCard";
export default function Membresias() {
  const [memberships, setMemberships] = useState<Membership[]>([]);
  useEffect(() => {
    getAllMebreships(setMemberships);
  }, []);
  const color: string[] = ["#f08d0d", "#39a1bb", "#5e139c", "#eb2f06"];
  const image: any[] = [
    firstbackground,
    secondbackground,
    firstbackground,
    secondbackground,
  ];

  return (
    <main>
      <header>
        <div className="h-60 bg-[#fada4d]">
          <div
            className="w-full h-full bg-cover sm:bg-center flex justify-center items-center"
            style={{
              backgroundImage:
                "url('img/Untitled_Artwork 1.png'), url('img/Untitled_Artwork 5.png')",
            }}
          >
            <h1 className="font-[Kidz] text-6xl text-white">MEMBRESÍAS</h1>
          </div>
        </div>
      </header>

      <section>
        <div className="container mx-auto px-4 lg:px-2 ">
          <header className="my-6">
            <h1 className="font-[Kidz] text-center text-5xl text-blue">
              Membresías Canta Juega Conmigo
            </h1>
          </header>

          <div className="flex flex-col gap-y-6 sm:flex-row sm:gap-x-3 sm:flex-wrap xl:flex-nowrap justify-center">
            {memberships.map((membership, index) => (
              <MembershipCard
                key={membership.id}
                membership={membership}
                color={color[index]}
                image={image[index]}
              />
            ))}

            {/* <article className='bg-[#f08d0d] p-1 rounded-2xl h-96 sm:basis-80'>

                     <header className=' w-11/12 mx-auto h-14 flex items-end justify-between'>
                        <h1 className='font-[Kidz] text-5xl text-white self-center'>MENSUAL</h1>
                        <Image height={100} width={100} src={firstbackground} alt="" />
                     </header>

                     <div className='bg-white h-[85%] rounded-b-2xl p-3 text-gray-500 flex flex-col justify-between items-center'>
                        <div>
                           <p className='text-base py-2 border-b-2 border-dashed border-gray-400'>Todas las herramientas terapéuticas para niñas y niños de 0 a 6 años.</p>
                           <p className='text-base py-2 border-b-2 border-dashed border-gray-400'>Material de apoyo audiovisual.</p>
                           <p className='text-base py-2 border-b-2 border-dashed border-gray-400'>Canciones del programa.</p>
                           <p className='text-lg py-2 '>Precio: <b>Q49.99 al mes</b>.</p>
                        </div>
                        <div>
                           <button className='bg-blue text-white p-3 font-semibold rounded-xl w-60'>SELECCIONA &gt;</button>
                        </div>
                     </div>

                  </article>

                  <article className='bg-[#39a1bb] p-1 rounded-2xl h-96 sm:basis-80'>

                     <header className=' w-11/12 mx-auto h-14 flex items-end justify-between'>
                        <h1 className='font-[Kidz] text-5xl text-white self-center'>SEMESTRAL</h1>
                        <Image height={100} width={100} src={secondbackground} alt="" />
                     </header>

                     <div className='bg-white h-[85%] rounded-b-2xl p-3 text-gray-500 flex flex-col justify-between items-center'>
                        <div>
                           <p className='text-base py-2 border-b-2 border-dashed border-gray-400'>Todas las herramientas terapéuticas para niñas y niños de 0 a 6 años.</p>
                           <p className='text-base py-2 border-b-2 border-dashed border-gray-400'>Material de apoyo audiovisual.</p>
                           <p className='text-base py-2 border-b-2 border-dashed border-gray-400'>Canciones del programa.</p>
                           <p className='text-lg py-2 '>Precio: <b>Q199.99 cada 6 meses</b>.</p>
                        </div>
                        <div>
                           <button className='bg-blue text-white p-3 font-semibold rounded-xl w-60'>SELECCIONA &gt;</button>
                        </div>
                     </div>

                  </article>

                  <article className='bg-[#5e139c] p-1 rounded-2xl h-96 sm:basis-80'>

                     <header className=' w-11/12 mx-auto h-14 flex items-end justify-between'>
                        <h1 className='font-[Kidz] text-5xl text-white self-center'>ANUAL</h1>
                        <Image height={100} width={100} src={firstbackground} alt="" />
                     </header>

                     <div className='bg-white h-[85%] rounded-b-2xl p-3 text-gray-500 flex flex-col justify-between items-center'>
                        <div>
                           <p className='text-base py-2 border-b-2 border-dashed border-gray-400'>Todas las herramientas terapéuticas para niñas y niños de 0 a 6 años.</p>
                           <p className='text-base py-2 border-b-2 border-dashed border-gray-400'>Material de apoyo audiovisual.</p>
                           <p className='text-base py-2 border-b-2 border-dashed border-gray-400'>Canciones del programa.</p>
                           <p className='text-lg py-2 '>Precio: <b>Q299.99 cada año</b>.</p>
                        </div>
                        <div>
                           <button className='bg-blue text-white p-3 font-semibold rounded-xl w-60'>SELECCIONA &gt;</button>
                        </div>
                     </div>

                  </article>

                  <article className='bg-[#eb2f06] p-1 rounded-2xl h-96 sm:basis-80'>

                     <header className=' w-11/12 mx-auto h-14 flex items-end justify-between'>
                        <h1 className='font-[Kidz] text-4xl text-white self-center'>CANTA CONMIGO</h1>
                        <Image height={100} width={100} src={secondbackground} alt="" />
                     </header>

                     <div className='bg-white h-[85%] rounded-b-2xl p-3 text-gray-500 flex flex-col justify-between items-center'>
                        <div>
                           <p className='text-base py-2 border-b-2 border-dashed border-gray-400'>Todas las canciones infantiles por etapa de desarrollo.</p>
                           <p className='text-base py-2 border-b-2 border-dashed border-gray-400'>Cancioneros digitales disponibles.</p>
                           <p className='text-lg py-2 '>Precio: <b>Q99.99 cada 6 meses</b>.</p>
                        </div>
                        <div>
                           <button className='bg-blue text-white p-3 font-semibold rounded-xl w-60'>SELECCIONA &gt;</button>
                        </div>
                     </div>

                  </article> */}
          </div>
        </div>
      </section>

      <footer className="bg-[#fdc273] lg:h-60">
        <div
          className="p-8 my-8 bg-cover bg-top sm:bg-center lg:h-full flex items-center"
          style={{ backgroundImage: "url('img/Untitled_Artwork 2.png')" }}
        >
          <p className="font-[Kidz] text-white text-4xl text-center sm:max-w-lg lg:max-w-xl sm:mx-auto">
            Diviertete aprendiendo con los videos y canciones que Canta Juega ha
            desarrollado para tus hij@!
          </p>
        </div>
      </footer>
    </main>
  );
}

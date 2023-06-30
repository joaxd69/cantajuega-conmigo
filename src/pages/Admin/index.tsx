import { useState } from "react"
import style from '../../styles/Admin.module.css'
import Image from "next/image"
import logo from '../../../public/img/Logo.png'
import example from '../../../public/img/Star 9.png'
import CardsStatistics from "@/components/Admin/CardsStatistics"
export default function Admin(){
    const [isadmin,setIsAdmin]=useState<boolean>(true)
    
    if(!isadmin){
        return(
            <div className=" min-h-screen flex items-center justify-center"> <h1>Debe ser un usuario administrador para acceder aqui.</h1></div>
        )
    }
    const fakeapi={
        New_Members:15,
        Courses_Completed:32,
        Contracted_Memberships:40,
        Users_Canceled:'0'
    }
    
    return(
        <div className=" min-h-screen  w-full absolute h-auto gap-8 min-[400px]:gap-5  sm:gap-20 md:gap-0 sm:h-full flex flex-col items-center">

            <header className={`${style.Header} w-full h-[35rem]  flex flex-col
            sm:flex-row sm:justify-center sm:h-[30%] sm:min-h-[20rem] relative `}>
                  <section className="flex  items-center h-[60%] w-full flex-col justify-end gap-5 sm:gap-0 sm:justify-normal sm:flex-row relative ">
                    <Image src={logo} alt="logo" className="  sm:absolute  max-h-[5rem] sm:h-[60%] sm:max-h-[5rem] w-auto left-[5%]" />
                    <article className="text-black h-3/6  sm:h-auto  sm:text-white text-3xl w-full sm:w-11/12 flex  justify-center sm:justify-end  ">
                        <div className="relative flex flex-col items-center w-full sm:w-auto ">
                          <Image alt="admin" className="  sm:absolute border-black  border rounded-full w-10 left-[-50%] text-[0rem]" src={example}/>
                          <h1 className=" h-full sm:h-auto max-sm:bg-white w-full text-center" >Hola kathy</h1>
                        </div>
                    </article>
                    {/* <h1 onClick={()=>setIsAdmin(false)}>Exit</h1> */}
                  </section>
                  <section className={`${style.Statistics} 
                   sm:text-white h-[40%] min-h-[15rem] max-h-max object-contain flex justify-center  items-center relative w-full gap-4 
                    sm:bottom-[-30%] flex-wrap
                    sm:flex-wrap sm:absolute 
                    md:text-base md:flex-nowrap xl:text-xl 2xl:text-2xl 
                    lg:w-[90%] lg:gap-5 lg:text-lg `} >
                    <h2 className="  top-0 sm:static md:absolute  w-11/12 sm:m-3 text-2xl">Estadistica semanal</h2>
                    <CardsStatistics statistic={fakeapi.New_Members} Title="Nuevos miembros" />
                    <CardsStatistics statistic={fakeapi.Courses_Completed} Title="Cursos completados" />
                    <CardsStatistics statistic={fakeapi.Contracted_Memberships} Title="Membresias contratadas" />
                    <CardsStatistics statistic={fakeapi.Users_Canceled} Title="Usuarios cancelados" />
                    <CardsStatistics hiddenresponsive={true} Title="Membresias" />
                    <CardsStatistics hiddenresponsive={true} Title="Etapas de desarrollo" />
                    <CardsStatistics hiddenresponsive={true} Title="Cancionero" />
                  </section>
            </header>

            <main className="text-black  min-h-[33rem] sm:min-h-[30rem] gap-4  h-auto flex flex-col justify-evenly sm:flex-row 
            sm:justify-between  items-center w-full  lg:p-0 lg:w-[90%]  ">

              <div className="hidden  sm:flex flex-col items-center max-w-3xl w-[55%] h-4/6 justify-center ">
                <h1 className="w-full">Reportes</h1>
                <div className="flex items-center border-2 border-gray-200 w-full h-4/6 rounded-md">

                    <section className="flex items-center justify-center w-6/12">
                        <h2>2 miembros reportaron.</h2>
                    </section>
                    <section className="flex flex-col items-center justify-evenly h-full w-6/12">
                        <article className="w-full flex justify-between ">
                            <h4>Maria</h4>
                            <p>No puede abonar membresia</p>
                        </article>
                        <article className="w-full flex justify-between ">
                            <h4>Jorge</h4>
                            <p>Tarjeta de crédito rechazada.</p>
                        </article>
                    </section>
                </div>
              </div>

                <div className=" w-full flex flex-col items-center  sm:hidden">
                     <section className="w-11/12  ">
                        <h1 className=" text-2xl" >Elementos</h1>
                     </section>
                     <section className="flex justify-center flex-wrap  w-full gap-4">

                    <CardsStatistics  Title="Membresias" />
                    <CardsStatistics  Title="Etapas de desarrollo" />
                    <CardsStatistics  Title="Cancionero" />
                     </section>

                </div>

              <div className="flex flex-col items-center max-w-2xl w-11/12 h-[15rem] sm:w-[40%]  sm:h-4/6  justify-center  ">

                <h1>Nuevos miembros</h1>
                <section className="  bg-[#CFD8DC80] flex flex-col border-2 border-gray-200 w-full h-4/6 rounded-md">
                    <article className="h-1/6 flex items-center">
                        <h3>5 nuevos miembros</h3>
                    </article>
                    <article className="flex items-center bg-white  h-5/6 overflow-auto gap-3">
                        <div className=""> <span>1nombre</span></div>
                        <div className=""> <span>nombre</span></div>
                        <div className=""> <span>nombre</span></div>
                        <div className=""> <span>nombre</span></div>
                        <div className=""> <span>nombre</span></div>
                        <div className=""> <span>nombre</span></div>
                        <div className=""> <span>nombre</span></div>
                        <div className=""> <span>nombre</span></div>
                        <div className=""> <span>nombre</span></div>
                        <div className=""> <span>nombre</span></div>
                        <div className=""> <span>nombre</span></div>
                        <div className=""> <span>nombre</span></div>
                        <div className=""> <span>nombre</span></div>
                        <div className=""> <span>nombre</span></div>
                        <div className=""> <span>Unombre</span></div>
                    </article>
                </section>
              </div>
                
        
            </main>
        </div>
    )
}
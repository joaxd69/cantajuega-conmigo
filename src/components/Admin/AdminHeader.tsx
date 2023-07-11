import style from '../../styles/Admin.module.css'
import Image from "next/image"
import logo from '../../../public/img/Logo.png'
import example from '../../../public/img/Star 9.png'
import CardsStatistics from "./CardsStatistics";
import { useAppSelector } from '@/context/store';

interface options{
 statistics:boolean
}
export default function AdminHeader({statistics}:options){
  const Admin=useAppSelector((state)=>state.userReducer.user)
  const isLoading=useAppSelector((state)=>state.userReducer.isLoading)
    const fakeapi={
        New_Members:15,
        Courses_Completed:32,
        Contracted_Memberships:40,
        Users_Canceled:'0'
    }
    
    return(
        <header className={`${style.Header} w-full h-[30rem]  flex flex-col
        sm:flex-row sm:justify-center sm:h-[30%] sm:min-h-[20rem] relative `}>

              <section className="flex   items-center h-full sm:h-[10rem] w-full flex-col justify-end gap-5 
              sm:gap-0 sm:justify-normal sm:flex-row relative ">
                <Image src={logo} alt="logo" className="  sm:absolute  max-h-[5rem] sm:h-[60%] sm:max-h-[5rem] w-auto left-[5%]" />
                <article className="text-black h-3/6  sm:h-auto  sm:text-white text-3xl w-full sm:w-11/12 flex  justify-center sm:justify-end  ">
                    <div className="relative flex flex-col items-center w-full sm:w-auto ">
                      <Image alt="admin" className="  sm:absolute border-black  border rounded-full w-10 left-[-50%] text-[0rem]" src={example}/>
                      <h1 className=" h-full sm:h-auto max-sm:bg-white w-full text-center" >Hola {Admin.firstName}</h1>
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
                {statistics&&
                <>     
                <h2 className="  top-0 sm:static md:absolute  w-11/12 sm:m-3 text-2xl">Estadistica semanal</h2>
                <CardsStatistics statistic={fakeapi.New_Members} Title="Nuevos miembros" />
                <CardsStatistics statistic={fakeapi.Courses_Completed} Title="Cursos completados" />
                <CardsStatistics statistic={fakeapi.Contracted_Memberships} Title="Membresias contratadas" />
                <CardsStatistics statistic={fakeapi.Users_Canceled} Title="Usuarios cancelados" />
                </>}
                <CardsStatistics hiddenresponsive={true} Title="Membresias" link="/Admin/Membresias" />
                <CardsStatistics hiddenresponsive={true} Title="Etapas de desarrollo" />
                <CardsStatistics hiddenresponsive={true} Title="Cancionero" link='/Admin/Cancionero' />
              </section>
        </header>
    )
}
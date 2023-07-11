import { useEffect } from "react"
import CardsStatistics from "@/components/Admin/CardsStatistics"
import AdminHeader from "@/components/Admin/AdminHeader"
import { useAppSelector } from "@/context/store"
import Link from "next/link"
import Loader from "@/components/Loader/Loader"


export default function Admin(){
    const user=useAppSelector(state=>state.userReducer.user)
    const auth=useAppSelector(state=>state.authReducer.isAuthenticated)
    const isLoading=useAppSelector(state=>state.userReducer.isLoading)
   useEffect(()=>{
     const NavMenu=document.getElementById('NavMenu') as HTMLElement;
     const footer=document.getElementById('footer') as HTMLElement;

     NavMenu.style.display='none';
     footer.style.display='none';
     return()=>{
        NavMenu.style.display='flex'
        footer.style.display='flex'
     }
   },[]);
   
    if(isLoading){
        
        return(
            <div className=" min-h-screen flex items-center justify-center">
                 <Loader />
            </div>
        )
    }
    if(user?.email!=='joakig6@gmail.com'){
      
        return(
            <div className=" min-h-screen flex items-center justify-center">
                 <h1>Debe ser un usuario administrador para acceder aqui.</h1>
            </div>
        )
    }
  
    
    return(
        <div className=" min-h-screen  w-full   h-auto gap-8 min-[400px]:gap-5  
        sm:gap-20 md:gap-8 sm:h-full 
        flex flex-col  items-center">
            <Link href={'/'}>
              <h1>Salir de panel de admin</h1>
            </Link>
            <AdminHeader statistics={true} />

            <main className="text-black min-h-[33rem] sm:min-h-[25rem] gap-4  h-auto flex flex-col justify-evenly sm:flex-row 
            sm:justify-between  items-center w-full  lg:p-0 lg:w-[90%]  ">

              <div className="hidden  sm:flex flex-col items-center max-w-3xl w-[55%] sm:h-[20rem]  justify-center ">
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

              <div className="flex flex-col items-center max-w-2xl w-11/12 h-[15rem] 
              sm:w-[40%]  sm:h-[20rem]  justify-center  ">

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
import AdminHeader from "@/components/Admin/AdminHeader";
import MembershipCard from "@/components/membership/MembershipCard";
import { Membership } from "@/types/membership.type";
import firstbackground from "../../../public/img/Untitled_Artwork 3.png";
import secondbackground from "../../public/img/Untitled_Artwork 5.png";
import Alerts from "@/components/alerts/Alerts";
import { AdminAlerts, alertsState } from "@/components/alerts/types";
import { useState ,MouseEvent, useEffect,MouseEventHandler, SVGProps} from "react";
import Link from "next/link";
import { deleteSubscribeMembreship, getAllMebreships } from "@/functions/memership.query";
export default function Membresias(){
    const [membership,setMemberships]=useState<Membership[]>([
        {
        id: '',
        name: '',
        description: '',
        price: 5,
        duration: 5,
        therapeuticTools: false,
        music: false,
        videos: false,
        recurrenteId: '',
        status: ''},
    ])
    const [DeleteList,setDeleteList]=useState<string[]>([])
    useEffect(()=>{
      getAllMebreships(setMemberships)
    },[])
    const [seeAlert,setSeeAlerts]=useState<alertsState>({///Traer la interface alertsState para tipar 
        alert1:false,
        text1:'',    
       })

    const closeAlert=()=>{//crear la funcion reset para cerrar los alerts
        setSeeAlerts({})
      }
    const PreConfirm=(event:MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault()
        setSeeAlerts({text1:'DESEA GUARDAR LOS CAMBIOS?',text2:'Los cambio se guardaran  en la pagina web.',CancelText:'Cancelar',AcceptTText:'Guardar'})
    }
    const SaveChanges=(event:MouseEvent<HTMLButtonElement>)=>{
       event.preventDefault();
       closeAlert();
       console.log('guardado')

    }

    const color: string[] = ["#f08d0d", "#39a1bb", "#5e139c", "#eb2f06"];
    

    const deleteInComponent=(event:MouseEvent<any>)=>{
        event.preventDefault()        
        setDeleteList([...DeleteList,event.currentTarget.id])
        console.log(DeleteList);
        
        const deleted=membership.filter(i=>i.id!==event.currentTarget.id)
        console.log(deleted,event.currentTarget.id);
        setMemberships(deleted)

    }
    const cancelChanges=()=>getAllMebreships(setMemberships)
    const deleteMembershipsDB=()=>{
       DeleteList.length&&DeleteList.forEach(value=>deleteSubscribeMembreship(value))
    }
    return (
        <div className="  min-h-screen flex flex-col gap-40" >
            <AdminHeader statistics={false} />
            <button onClick={()=>{console.log(DeleteList)}}>ver lista </button>
    
            <section className=" w-[70%] m-auto  grid grid-flow-row  grid-cols-2  gap-8 ">
            {membership.map((i,key)=>
            <article key={key} className=" m-auto">
                <MembershipCard onClick={(event)=>deleteInComponent(event)}  membership={i} color={color[key]} image={firstbackground} Admin={true}/>
            </article>
            )}
            </section>
            <section className="w-full flex flex-col items-center gap-5">
                <button className="text-white bg-black text-3xl h-[3rem] w-[3rem] rounded-full">+</button>
                <article className="w-full flex justify-center gap-5">
                  
                    <button className="border-2 border-black p-3 w-[10rem]" onClick={cancelChanges}>Cancelar</button>
        
                    <button className="border-2 border-black p-3 w-[10rem]" onClick={PreConfirm}>Guardar</button>
                </article>
            </section>
          {seeAlert.text1&&  <Alerts Personalizado={seeAlert}  close={closeAlert} onClick={deleteMembershipsDB}/>}
        </div>
    )
}
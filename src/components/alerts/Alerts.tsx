import {MouseEventHandler, useState} from 'react'
import { Alertsprops, MiscursosAlerts } from './types'
export default function Alerts({Miscursos,Membresias,Personalizado,close}:Alertsprops){
  
 return(
    <div id='alert' className="bg-[#D9D9D9A1] absolute w-full h-full justify-center items-center top-0 z-50 flex" >

       {Miscursos===MiscursosAlerts.Alert1&&
       <section className="bg-white w-6/12 h-3/6 flex flex-col items-center justify-evenly">
            <h1>¡Recuerda!</h1>
            <h1>AUN NO PUEDES AVANZAR</h1>
            <button className="bg-orange p-2 rounded-lg" onClick={close}>CONTINUAR</button>
        </section>}

       {Personalizado&&
       <section className="bg-white w-6/12 h-3/6 flex flex-col items-center justify-evenly">
            <h1>{Personalizado.text1}</h1>
            <h1>{Personalizado.text2}</h1>
            <button className="bg-orange p-2 rounded-lg" onClick={close}>CONTINUAR</button>
        </section>}
        
        
    </div>
 )
}
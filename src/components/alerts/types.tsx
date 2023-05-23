import { MouseEventHandler } from "react"

export enum MiscursosAlerts{
  Default='Default',
  Alert1='Alert1',
}
export enum MembresiasAlerts{
  Alert1='Alert1',
  Alert2='Alert2',
  Alert3='Alert3'
}

export interface Alertsprops{
    Personalizado?:{
        text1?:string,
        text2?:string,
    },
    Miscursos?:MiscursosAlerts,
    Membresias?:MiscursosAlerts,
    close?:MouseEventHandler<HTMLButtonElement>
  }

export interface alertsState{
    alert1?:boolean,
    alert2?:boolean,
    alert3?:boolean,
    alert4?:boolean,
    alert5?:boolean,
    text1?:string,
    text2?:string,
}

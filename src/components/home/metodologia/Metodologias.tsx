import styles from '../../../styles/Metodologias.module.css'
import image from '../../../../public/img/Untitled_Artwork-3-1.png'
import Image from 'next/image'
import { useState ,MouseEvent} from 'react'
import Modal from './Modal'
import { ModalContent,Types,Neuroeducacion,Music_art,VideoModelling } from './Interfaces'

export default function Metodologias(){
  const [modal,setModal]=useState<boolean>(false)
  const [actualModal,setActualModal]=useState<ModalContent>({
    text:'',
    title:''
  })
  const closemodal=()=>{
    setModal(false)
  }
  
  const setContentModal=(e:MouseEvent<HTMLButtonElement>):void=>{
     const value:string=e.currentTarget.value
     let content:ModalContent ={text:'',title:''};
     value===Neuroeducacion.title?content=Types.Neuroeducacion:
     value===Music_art.title?content=Types.Music_art:
     value===VideoModelling.title?content=Types.VideoModelling:null
    setActualModal(content)
    setModal(true)
  }
   return (
    <div className={`${styles.Container} h-[20rem] `}>
      <section className='flex flex-col items-center justify-center h-full  relative'>
        <article className='z-20 h-1/6 '>
        <h1 className=' text-5xl text-yellow'>Metodología</h1>
        </article>
        <article className='z-20 flex h-5/6 flex-col items-center justify-around'>   
          <button className='h-[3rem] w-[17rem] flex items-center justify-between' onClick={setContentModal} value={Neuroeducacion.title}>
            <span className='bg-blue w-[3.2rem] h-full flex items-center justify-center rounded-lg text-3xl'>1</span>
            <span className=' w-[12rem] h-full items-center flex text-blue text-2xl '>Neuroeducación</span>
          </button>
          <button className='h-[3rem] w-[17rem] flex items-center justify-between' onClick={setContentModal} value={Music_art.title}>
            <span className='bg-blue w-[3.2rem] h-full flex items-center justify-center rounded-lg text-3xl'>2</span>
            <span className=' w-[12rem] h-full items-center flex text-blue text-2xl '>Música y arte</span>
          </button>
          <button className='h-[3rem] w-[17rem] flex items-center justify-between' onClick={setContentModal} value={VideoModelling.title}>
            <span className='bg-blue w-[3.2rem] h-full flex items-center justify-center rounded-lg text-3xl'>3</span>
            <span className=' w-[12rem] h-full items-center flex text-blue text-2xl '>Video modeling</span>
          </button>
        </article>
      <Image alt='cjimgs' src={image} className=' z-10 absolute top-0 h-full w-auto left-[10rem]'/>
      </section>
      {modal&&<Modal closeModal={closemodal} text={actualModal.text} title={actualModal.title}/>}
    </div>
   )
}
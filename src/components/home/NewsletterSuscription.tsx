import { BsArrowLeft, BsArrowLeftShort } from 'react-icons/bs'
import styles from '../../styles/NewsletterSuscription.module.css'
import Image from 'next/image'
import image from '../../../public/img/img.png'
export default function NewsletterSuscription(){
    return(
    <div id='contacto' className={`${styles.Container} h-[39rem] bg-secondOrange flex flex-col items-center justify-center pb-7 relative`}>
      <Image src={image} alt='cjimgs' className=' absolute top-[20%] left-0 h-[70%] w-auto z-0 ' />
     <div className={`${styles.Aux} h-[2rem] w-full absolute top-0`}>
     
     </div>
        <section className='h-[7rem]  w-[50rem] flex items-center justify-center z-10'>
           <h1 className=' text-2xl text-center'>
            ¡Suscríbete para recibir semana a semana nuestro boletín especial!
             Material educativo, cursos, libros y mucho mas
          </h1>
        </section>  

        <section className={`${styles.FormSection} z-10 flex flex-col items-center w-[44rem] h-[19rem] pt-2  mt-3  `}>
           <section className=' h-1/6 flex items-center '>
           <h1 className=' text-xl'>Acompaña a tu hijo en esta nueva etapa</h1>
           </section>
          <form className='flex flex-col items-center w-8/12 h-5/6 '>
            <input className='w-[20.5rem] h-[3.5rem] pl-4 border-b-2 mb-2 border-black border-opacity-30 rounded' type="text" name="" id="" placeholder='Nombre'/>
            <input className='w-[20.5rem] h-[3.5rem] pl-4 border-b-2 mb-2 border-black border-opacity-30 rounded' type="text" name="" id="" placeholder='Correo electronico' />
            <input className='w-[20.5rem] h-[3.5rem] pl-4 border-b-2 mb-2 border-black border-opacity-30 rounded' type="number" name="" id="" placeholder='Telefono'/>
            <button type='submit' className=' bg-white  border-orangeicons w-[8rem] mt-2'>Enviar</button>
          </form>
        </section>
        <button className=' z-10 absolute bottom-[4.5%] left-[44%] bg-blue h-[3.5rem] w-[10rem] rounded-full text-white'>
          Inicio
          <BsArrowLeftShort className='text-[1.7rem] absolute top-[30%] left-[20%] text-orangeicons'/>
        </button>
    </div>
  )
}
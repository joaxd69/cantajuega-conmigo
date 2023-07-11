import Image from "next/image";
import image1 from '../../../public/img/loader/image 1.png'
import image2 from '../../../public/img/loader/image 2.png'
import image3 from '../../../public/img/loader/image 3.png'
import image4 from '../../../public/img/loader/image 4.png'
import bluecircle from '../../../public/img/loader/bluecircle.png'
export default function Loader(){
     const rotate= '[--tw-rotate:-30deg]'
     const rotatestar2= '[--tw-rotate:-65deg]'
    return (
       <div className=" bg-yellow fixed z-50 h-full w-full min-h-full">
          <Image src={image1} alt="loaderimg1" className="  absolute w-[15rem] md:w-[20rem]"/>
          <Image src={image2} alt="loaderimg1" className="  absolute right-0 w-[15rem] md:w-[20rem]"/>

          <div className={`absolute  w-[25rem] h-[10rem] transform -rotate-45 ${rotate} top-[50%] left-[30%]`}>
            <div className=" absolute h-full w-4/12 z-20 ">
             <Image src={bluecircle} alt="loaderimg1" className="  absolute h-full w-auto "/>
             <Image src={image3} alt="loaderimg1" className={`  absolute h-4/6 w-auto left-[12%] top-[15%] -rotate-45 ${rotate}`}/>
            </div>
             <Image src={image4} alt="loaderimg1" className="  absolute h-[40%] w-4/6 left-[5%]  z-10 top-[30%]  "/>
             
            <div className=" absolute h-full w-4/12 z-20 right-0">
             <Image src={bluecircle} alt="loaderimg1" className="  absolute h-full w-auto "/>
             <Image src={image3} alt="loaderimg1" className={`  absolute h-4/6 w-auto left-[12%] top-[15%] -rotate-45 ${rotatestar2}`}/>
            </div>
            
          </div>
        
       </div> 
    )
}
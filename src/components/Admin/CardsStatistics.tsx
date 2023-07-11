import Link from "next/link"

interface props{
  Title:string,
  statistic?:any,
  hiddenresponsive?:boolean,
  link?:string
}

export default function CardsStatistics({Title,statistic,hiddenresponsive,link}:props){
    if(link){
       return  <Link href={link} className={`${hiddenresponsive?'hidden':'flex'}   flex-col justify-center gap-2 items-center rounded-lg text-center  bg-white
       w-[40%] h-[6rem]
      2xl:w-[12%] 2xl:max-w-[16rem] 2xl:h-[9rem]
      xl:w-[12%] xl:max-w-[15rem] xl:h-[8rem]
      lg:w-[12%] lg:max-w-[14rem] lg:h-[7rem]
       md:w-[13%] md:max-w-[13rem] md:h-[7rem]
     sm:flex  sm:w-[9.2rem] sm:max-w-[13rem] sm:h-[6rem] sm:bg-[#263238] sm:border-none sm:shadow-none border-2 border-[#546E7ABF] drop-shadow-xl 
        min-[400px]:w-[45%] min-[400px]:h-[5rem]
       
      `}>
     <h3 className=" text-3xl">{statistic}</h3>
     <span>{Title}</span>
       </Link>
    }

    return(
        <article className={`${hiddenresponsive?'hidden':'flex'}   flex-col justify-center gap-2 items-center rounded-lg text-center  bg-white
                      w-[40%] h-[6rem]
                     2xl:w-[12%] 2xl:max-w-[16rem] 2xl:h-[9rem]
                     xl:w-[12%] xl:max-w-[15rem] xl:h-[8rem]
                     lg:w-[12%] lg:max-w-[14rem] lg:h-[7rem]
                      md:w-[13%] md:max-w-[13rem] md:h-[7rem]
                    sm:flex  sm:w-[9.2rem] sm:max-w-[13rem] sm:h-[6rem] sm:bg-[#263238] sm:border-none sm:shadow-none border-2 border-[#546E7ABF] drop-shadow-xl 
                       min-[400px]:w-[45%] min-[400px]:h-[5rem]
                      
                     `}>
                    <h3 className=" text-3xl">{statistic}</h3>
                    <span>{Title}</span>
        </article>
    )
}
import Image from "next/image";
import React from "react";
import YouTube from "react-youtube";
import img from "../../../public/img/img.png";
import img_2 from "../../../public/img/img-2.png";

const videoId = "jqLaRv0fuXc";

const Trailer = () => {
  return (
    <main className="flex flex-wrap w-full bg-green">
      <div className="w-full md:w-1/2 relative">
        <h2 className="font-bold text-4xl md:text-6xl text-center absolute top-10 md:top-16 left-0 md:left-32 right-0 md:right-auto z-10">
          Descubre <br /> CantaJuega Conmigo
        </h2>
        <h3 className="text-lg w-full flex justify-center md:text-4xl text-blue font-semibold text-center absolute top-44 md:top-64 left-0 md:right-auto right-0 md:left-auto z-10">
          Una experiencia única <br /> para quien te hace <br /> muy feliz
        </h3>

        <Image
          className="w-full h-full object-cover"
          src={img}
          alt={"Canta Juega Conmigo"}
        />
      </div>
      <div className="flex items-center justify-center w-full md:w-1/2 relative mt-8 md:mt-0">
        <div className="border h-60 md:h-[70%] border-black overflow-hidden w-full max-w-md md:max-w-xl mx-auto rounded-3xl z-10 md:">
          <YouTube
            videoId={videoId}
            opts={{
              height: "100%",
              width: "100%",
              playerVars: {},
            }}
            className="w-full h-full"
          />
        </div>
        <Image
          className="w-full h-full object-cover z-0 absolute top-0 left-0"
          src={img_2}
          alt={"Canta Juega Conmigo"}
        />
      </div>
    </main>
  );
};

export default Trailer;

import React from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";
import Image from "next/image";
import artwork from "../../../../public/img/Untitled_Artwork-3-1.png";

const Metodologias = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedTitle, setSelectedTitle] = React.useState({
    title: "",
    text: "",
  });

  function openModal(title: any) {
    // console.log("opening modal");
    setSelectedTitle(title);
    // console.log("TITLE ES ESTE", selectedTitle);
    setShowModal(true);
  }

  function closeModal() {
    // console.log("closing Modal");
    setShowModal(false);
    setSelectedTitle({
      title: "",
      text: "",
    });
  }

  return (
    <section
      id="metodologia"
      className="sm:p-16 xs:p-8 px-6 py-12 relative z-10  bg-white"
    >
      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8"
      >
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          className="flex-1 flex justify-center items-center"
        >
          <Image
            src={artwork}
            height={1200}
            width={1200}
            alt="CJ"
            className="w-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          className="flex-[0.75] flex justify-center flex-col"
        >
          {/* TITULO*/}

          <motion.h2
            initial={{
              x: 200,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-yellow-500`}
          >
            Metodología
          </motion.h2>

          {/* CONTENIDO */}

          <div className="mt-[31px] flex flex-col  gap-[24px]">
            {metodologies.map((feature, index) => (
              <StartSteps
                key={index}
                number={index + 1}
                text={feature.text}
                title={feature.title}
                showModal={showModal}
                index={index}
                openModal={openModal}
                closeModal={closeModal}
                selectedTitle={selectedTitle}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const metodologies = [
  {
    text: "La Neuroeducación se enfoca en crear un ambiente seguro y estimulante para el aprendizaje, en donde las niñas y los niños son los protagonistas y van aprendiendo a través de la experiencia, de forma multisensorial, involucrando las emociones y fomentando la creatividad.",
    title: "Neuroeducación",
  },
  {
    text: "El arte fomenta la creatividad, mejora las habilidades motoras y la coordinación, desarrolla el lenguaje y la comunicación, promueve la empatía y la comprensión, y mejora la autoestima y la confianza. Por lo tanto, utilizamos el arte para que los niños sientan motivados a seguir aprendiendo.",
    title: "Música y arte",
  },
  {
    text: "El modelado de video puede ser una técnica efectiva de intervención para niñas y niños con diagnósticos como el autismo y dificultades en el desarrollo de lenguaje. Puede aumentar la motivación y la atención, mejorar la comprensión y el aprendizaje, facilitar la imitación y la práctica, favorecer la generalización de habilidades y puede ser utilizado en terapias individuales y grupales. Por lo tanto, utilizamos el modelado de video como una herramienta efectiva para recuperar habilidades lingüísticas y motoras en niñas y niños con diagnósticos específicos.",
    title: "Video Modeling",
  },
];

const StartSteps = ({
  number,
  text,
  title,
  openModal,
  showModal,
  closeModal,
  selectedTitle,
}: any) => (
  <div className="flex justify-center items-center flex-row cursor-pointer">
    <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#26798E] ">
      <p className="font-bold text-[20px] text-white">{number}</p>
    </div>
    <h4
      className="flex-1 ml-[30px] font-bold text-[18px] text-[#26798E] leading-[32.4px] hover:text-yellow-500"
      onClick={() => openModal({ title: title, text: text })}
    >
      {title}
    </h4>
    {showModal ? (
      <Modal
        title={selectedTitle.title}
        text={selectedTitle.text}
        closeModal={closeModal}
      />
    ) : null}
  </div>
);

export default Metodologias;

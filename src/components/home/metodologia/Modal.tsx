import React from "react";

const Modal = ({ closeModal, text, title }: any) => {
  const closeModalBgClick = (e: any) => {
    // console.log("clicked anywhere");
    if (e.target.id === "modal-bg") {
      // console.log("clicked modal bg");
      // console.log(e.target);
      closeModal();
    }
  };

  return (
    <div
      id="modal-bg"
      className="fixed z-50 top-0 left-0 w-screen h-screen bg-zinc-700/50 flex flex-col justify-center items-center"
      onClick={closeModalBgClick}
    >
      <div className="bg-white md:w-6/12 w-10/12 max-w-screen-md rounded-lg p-4 m-4 flex flex-col relative shadow-2xl">
        <h1 className="text-center pb-8 text-4xl ">{title}</h1>
        <div className="w-6/12 h-1 mx-auto mb-8 bg-yellow-500" />
        <p className="p-4">{text}</p>
      </div>
    </div>
  );
};

export default Modal;

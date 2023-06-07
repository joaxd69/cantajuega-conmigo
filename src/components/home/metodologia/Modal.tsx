import React from "react";
import {MetodologiasProps} from './Interfaces'
import {MouseEvent,useEffect} from 'react'
const Modal = ({ closeModal, text, title }: MetodologiasProps) => {
  useEffect(()=>{
    const body= document.getElementById('Body') as HTMLBodyElement;
    body.style.overflow='hidden';
    return()=>{
       body.style.overflow='auto'
      }
  },[])

  const closeModalBgClick = (e:MouseEvent  <HTMLDivElement>) => {
    if (e.currentTarget.id === "modal-bg") {
      closeModal();
    }
  };

  return (
    <div
      id="modal-bg"
      className="fixed z-50 top-0 left-0 w-screen h-screen bg-zinc-700/50 flex flex-col justify-center items-center"
      onClick={closeModalBgClick}
    >
      <div className="w-[50rem] h-[15rem] text-center flex flex-col bg-white items-center p-2">
        <section className="h-1/6 border-b-4 border-yellow w-[30rem]">
          <h1 className=" text-2xl">{title}</h1>
        </section>
        <section className="w-full h-5/6 flex justify-center items-center">
          <p className="w-11/12">{text}</p>
        </section>
      </div>
    </div>
  );
};

export default Modal;

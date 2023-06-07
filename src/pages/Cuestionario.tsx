import Alerts from "@/components/alerts/Alerts";
import { alertsState,CuestionarioAlerts } from "@/components/alerts/types";
import { useState ,MouseEvent,ChangeEvent} from "react";
import styles from '../styles/Cuestionario.module.css'
import { FormQuestions,Palabrasclaras,Question,Answers, FormValidates,Formkeys, ERRORS, errormessages } from "@/components/global/CuestionarioValidators";

export default function Cuestionario (){
    

    const [form,setForm]=useState<FormQuestions>({
        Adult:{
            Name:'',
            Surname:'',
            PhoneNumber:'',
            Age:0,
        },
        Child:{
            Name:'',
            Surname:'',
            CantidadPalabras:Palabrasclaras.initial
        },
        Question1:{ 
            Question:Question.one,
            Answer:Answers.initial,
            Detail:Answers.initial
        },
        Question2:{
            Question:Question.two,
            Answer:Answers.initial,
        
        },
        Question3:{
            Question:Question.three,
            Answer:Answers.initial,
        },
        Question4:{
            Question:Question.four,
            Answer:Answers.initial,
        },
        Question5:{
            Question:Question.five,
            Answer:Answers.initial,
        },
        Question6:{
            Question:Question.six,
            Answer:Answers.initial,
        }
    })
    const [errors,setErrors]=useState<ERRORS>({
        EmptyFields:errormessages.emptyfields
    })
    const [seeAlert,setSeeAlerts]=useState<alertsState>({///Traer la interface alertsState para tipar 
        alert1:false,
        alert2:false,
       })
    
    const [seeErrors,setSeeErrors]=useState<boolean>(false)
    
    const closeAlert=()=>{//crear la funcion reset para cerrar los alerts
        setSeeAlerts({})
      }
    const preConfirmChanges=(e:MouseEvent<HTMLButtonElement>)=>{
      e.preventDefault();
      setSeeAlerts({
        alert1:true
      })
    }
    const setParentsInfo=(event:ChangeEvent<HTMLInputElement>)=>{
     
      const updatedForm = {
        ...form,
        Adult: {
          ...form.Adult,
          [event.target.name]: event.target.value
        }
      };
      setForm(updatedForm);   
      setErrors(FormValidates(updatedForm))  
    
          console.log(errors);
          
    }
    const setChildInfo=(event:ChangeEvent<HTMLInputElement>)=>{
        const updatedForm={
            ...form,
            Child:{
                ...form.Child,
                [event.target.name]:event.target.value
            }
         }
         setForm(updatedForm);
         setErrors(FormValidates(updatedForm))
         console.log(errors);
    }
    const setChildInfoselect=(event:ChangeEvent<HTMLSelectElement>)=>{
        const updatedForm={
            ...form,
            Child:{
                ...form.Child,
                [event.target.name]:event.target.value
            }
         }
         setForm(updatedForm)
         setErrors(FormValidates(updatedForm))
         
    }
    const setQuestion1=(event:ChangeEvent<HTMLInputElement>)=>{
        let valor= event.target.value===form.Question1.Answer?Answers.initial:event.target.value
        let inputDetails=document.getElementById('DetailQuestionOne') as HTMLInputElement;
        let Yescheck=document.getElementById('YesAnswerQ1') as HTMLInputElement;
        let Nocheck=document.getElementById('NoAnswerQ1') as HTMLInputElement;
        if(valor===Answers.No){
            inputDetails.disabled=true
            Yescheck.checked=false
            setForm({
                ...form,
                Question1:{
                    ...form.Question1,
                    Answer:valor,
                    Detail:Answers.initial
                }
            })
        }else{
            Nocheck.checked=false
            inputDetails.disabled=false
            setForm({
                ...form,
                Question1:{
                    ...form.Question1,
                    [event.target.name]:valor,
                }
            })
        }   
        !valor&&(inputDetails.disabled=true)
    } 
    const setQuestions=(event:ChangeEvent<HTMLInputElement>,NumberQuestion:keyof FormQuestions,checksid:string)=>{
        const value= event.target.value===form[NumberQuestion].Answer?Answers.initial:event.target.value
        const Yescheck=document.getElementById(`YesAnswerQ${checksid}`) as HTMLInputElement;
        const Nocheck=document.getElementById(`NoAnswerQ${checksid}`) as HTMLInputElement;
        const OtherOption=document.getElementById(`OtherAnswerQ${checksid}`) as HTMLInputElement
                                                   
        event.target.value===Answers.No?
        (Yescheck.checked=false,(OtherOption? OtherOption.checked=false :null)):
        event.target.value===Answers.Si?
        ((OtherOption? OtherOption.checked=false :null),Nocheck.checked=false):
        (Yescheck.checked=false, Nocheck.checked=false)
         setForm({
                ...form,
                [NumberQuestion]:{
                    ...form[NumberQuestion],
                    [event.target.name]:value
                }
             })
      }
    
      const submitForm =()=>{
       if(Object.keys(errors).length){
          errors.EmptyFields?alert(errors.EmptyFields):alert(errors.General);
          setSeeErrors(true)
          setTimeout(() => {
             setSeeErrors(false)
          }, 10000);
          
       }else{
          alert('Todo bien');
       }
        
      }
    return (
        <div className={`${styles.Cuestionario} flex h-[45rem] justify-center bg-white relative `}>
              {/* <button onClick={()=>console.log(errors)} className="absolute bg-slate-500 p-23">ver errores</button>
              <button onClick={()=>console.log(form)} className="absolute bg-slate-500 p-23 left-0">ver form</button> */}
             <div className="flex flex-col items-center w-[24rem]  p-3 ">
                <section className="flex flex-col  h-[15rem] w-full justify-evenly ">
                    <article>
                       <h1>Adulto responsable</h1>
                    </article>
                    <article className="flex justify-between items-center">
                        
                        <label htmlFor="" className="w-4/12">Nombre: </label>
                        <input type="text" name="Name" value={form.Adult.Name} onChange={setParentsInfo}
                         className="w-7/12 border border-gray-400" />
                    </article>
                    {seeErrors&&<span>{errors.AdultErrors?.Name}</span>}
                    <article className="flex justify-between items-center">
                        <label htmlFor="" className="w-4/12" >Apellido: </label> 
                        <input type="text" name="Surname" value={form.Adult.Surname} onChange={setParentsInfo}
                         className="w-7/12 border border-gray-400"  />
                    </article>
                    <article className="flex justify-between items-center">
                        <label htmlFor="" className="w-4/12">Numero telefónico: </label>
                        <input type="text" name="PhoneNumber" value={form.Adult.PhoneNumber} onChange={setParentsInfo}
                         className="w-7/12 border border-gray-400" />
                    </article>
                    <article className="flex justify-between items-center">
                        <label htmlFor=""  className="w-4/12">Edad: </label>
                        <input type="text" name="Age" value={form.Adult.Age} onChange={setParentsInfo}
                         className="w-7/12 border border-gray-400" />
                    </article>
                </section>

                <section className="flex flex-col h-[15rem] w-full   justify-evenly">
                    <h1>Datos del niño o niña</h1>
                    <article className="flex justify-between items-center">
                        <label htmlFor=""  className="w-4/12">Nombre</label>
                        <input type="text"value={form.Child.Name} name="Name"  onChange={setChildInfo} 
                        className="w-7/12 border border-gray-400"/>
                    </article>
                    <article className="flex justify-between items-center">
                        <label htmlFor="" className="w-4/12">Apellido</label>
                        <input type="text" value={form.Child.Surname} name="Surname" onChange={setChildInfo} 
                        className="w-7/12 border border-gray-400"/>
                    </article>
                    <article className="">
                        <label htmlFor="" className="w-8/12">Cantidad de palabras que dice de forma clara. :</label> <br />
                        <select name="CantidadPalabras" onChange={setChildInfoselect}  id="" > 
                            <option value={Palabrasclaras.initial}>Seleccione:</option>
                            <option value={Palabrasclaras.Option1}>0 a 10</option>
                            <option value={Palabrasclaras.Option2}>11 a 20</option>
                            <option value={Palabrasclaras.Option3}>20 a 30</option>
                            <option value={Palabrasclaras.Option4}>30 a 50</option>
                            <option value={Palabrasclaras.Option5}>50 a 70</option>
                        </select>
                    </article>
                </section>
             </div>


          <div className={`${styles.SecondContainer} flex flex-col justify-between `}>

                <section className="flex h-[13rem] justify-evenly">
       {/*CAJA 1*/ }<article className="    justify-evenly h-full flex flex-col w-5/12 items-center">
                        <h1 className=" text-center">¿Alguien de la familia ha tenido dificultades en el desarrollo del lenguaje?</h1>
                           
                           <article className="flex  items-center w-[15rem] justify-between h-[2rem] relative">
                            <input type="checkbox" name="Answer" id="YesAnswerQ1"  value={Answers.Si} onChange={setQuestion1}/>
                            <label  className={styles.CheckboxLabel} htmlFor="YesAnswerQ1">Si</label>
                           </article>
                           <article className="flex  items-center w-[15rem] justify-between h-[2rem] relative">
                            <input type="checkbox" name="Answer" id="NoAnswerQ1" value={Answers.No} onChange={setQuestion1}/>
                           <label  className={styles.CheckboxLabel} htmlFor="NoAnswerQ1">No</label>
                           </article>
                           <article className="flex  items-center w-[15rem] justify-between h-[2rem] relative">
                           <label htmlFor="DetailQuestionOne">Cual</label>
                            <input type="text" id="DetailQuestionOne" className="border border-gray-400" 
                            name="Detail" value={form.Question1.Detail} onChange={setQuestion1} disabled/>
                           </article>
            
                    </article>

       {/*CAJA 2*/ }<article className="    justify-evenly h-full flex flex-col items-center w-5/12">
                        <h1 className=" text-center">¿Presenta alguna dificultad en la pronunciación de algún fonema “r”, “l”, “d”, “t”?</h1>
                         <article className="flex  items-center w-[15rem] justify-between h-[2rem] relative">
                            <input type="checkbox" id="YesAnswerQ2" value={Answers.Si} name="Answer"
                             onChange={(event)=>setQuestions(event,Formkeys.Question2,'2')} />
                            <label  className={styles.CheckboxLabel} htmlFor="YesAnswerQ2">Si</label>
                         </article>
                         <article className="flex  items-center w-[15rem] justify-between h-[2rem] relative">

                            <input type="checkbox" id="NoAnswerQ2" value={Answers.No} name="Answer"
                            onChange={(event)=>setQuestions(event,Formkeys.Question2,'2')} />

                            <label  className={styles.CheckboxLabel} htmlFor="NoAnswerQ2">No</label>
                         </article>
                         <article className="flex  items-center w-[15rem] justify-between h-[2rem] relative">
                            <input type="checkbox" id="OtherAnswerQ2" value={Answers.Algunas_veces} name="Answer"
                             onChange={(event)=>setQuestions(event,Formkeys.Question2,'2')}/>
                            <label  className={styles.CheckboxLabel} htmlFor="OtherAnswerQ2">Algunas veces</label>
                         </article>
                    </article>
                </section>

                <section className="flex h-[13rem]  justify-evenly">

    {/*CAJA 3*/ } <article className="    justify-evenly h-full flex flex-col items-center w-5/12">
                        <h1 className=" text-center">¿En el establecimiento educativo han indicado que el niño o niña necesita mejorar su lenguaje?</h1>
                      
                       <article className="flex  items-center w-[15rem] justify-between h-[2rem] relative">
                          <input type="checkbox" name="Answer" id="YesAnswerQ3"  value={Answers.Si}
                           onChange={(event)=>setQuestions(event,Formkeys.Question3,'3')}/>
                          <label  className={styles.CheckboxLabel} htmlFor="YesAnswerQ3">Si</label>
                       </article>

                       <article className="flex  items-center w-[15rem] justify-between h-[2rem] relative">
                        <input type="checkbox" name="Answer" id="NoAnswerQ3" value={Answers.No} 
                        onChange={(event)=>setQuestions(event,Formkeys.Question3,'3')}/>
                        <label  className={styles.CheckboxLabel} htmlFor="NoAnswerQ3" >No</label>
                       </article>
                       <article className="flex  items-center w-[15rem] justify-between h-[2rem] relative">
                         <input type="checkbox" name="Answer" id="OtherAnswerQ3" value={Answers.Sinestablecimiento}
                         onChange={(event)=>setQuestions(event,Formkeys.Question3,'3')}/>
                        <label htmlFor="OtherAnswerQ3" className={styles.CheckboxLabel}>No se encuentra en ningún establecimiento educativo</label>
                       </article>
                       
                    </article>
      {/*CAJA 4*/ } <article className="    justify-evenly h-full flex flex-col items-center w-5/12">
                        <h1 className=" text-center">¿Cuándo dice una palabra con “s”, la misma suena como si fuera “d”?</h1>
                        <article className="flex  items-center w-[15rem] justify-between h-[2rem] relative">
                          <input type="checkbox" name="Answer" id="YesAnswerQ4" value={Answers.Si}
                           onChange={(event)=>setQuestions(event,Formkeys.Question4,'4')} />
                          <label  className={styles.CheckboxLabel} htmlFor="YesAnswerQ4">Si</label>
                       </article>
                       <article className="flex  items-center w-[15rem] justify-between h-[2rem] relative">
                        <input type="checkbox" name="Answer" id="NoAnswerQ4"  value={Answers.No}
                         onChange={(event)=>setQuestions(event,Formkeys.Question4,'4')} />
                        <label  className={styles.CheckboxLabel} htmlFor="NoAnswerQ4">No</label>
                       </article>
                       <article className="flex  items-center w-[15rem] justify-between h-[2rem] relative">
                         <input type="checkbox" name="Answer" id="OtherAnswerQ4"  value={Answers.Algunas_veces}
                          onChange={(event)=>setQuestions(event,Formkeys.Question4,'4')} />
                        <label  className={styles.CheckboxLabel} htmlFor="OtherAnswerQ4">Algunas veces.</label>
                       </article>
                    </article>
                </section>

                <section className="flex h-[13rem]  justify-evenly">

 {/*CAJA 5*/ }  <article className="    justify-evenly h-full flex flex-col items-center w-5/12">
                        <h1 className=" text-center">¿Cuándo dice una palabra con “r”, la misma suena como si fuera “l”?</h1>
                        <article className="flex  items-center w-[15rem] justify-between h-[2rem] relative">
                          <input type="checkbox" name="Answer" id="YesAnswerQ5"  value={Answers.Si}
                           onChange={(event)=>setQuestions(event,Formkeys.Question5,'5')} />
                          <label  className={styles.CheckboxLabel} htmlFor="YesAnswerQ5">Si</label>
                       </article>
                       <article className="flex  items-center w-[15rem] justify-between h-[2rem] relative">
                        <input type="checkbox" name="Answer" id="NoAnswerQ5"  value={Answers.No}
                         onChange={(event)=>setQuestions(event,Formkeys.Question5,'5')} />
                        <label  className={styles.CheckboxLabel} htmlFor="NoAnswerQ5">No</label>
                       </article>
                       <article className="flex  items-center w-[15rem] justify-between h-[2rem] relative">
                         <input type="checkbox" name="Answer" id="OtherAnswerQ5"  value={Answers.Algunas_veces}
                          onChange={(event)=>setQuestions(event,Formkeys.Question5,'5')} />
                        <label  className={styles.CheckboxLabel} htmlFor="OtherAnswerQ5">Algunas veces.</label>
                       </article>
                 </article>

  {/*CAJA 6*/ }  <article className=" h-full flex flex-col justify-around items-center w-5/12 pb-7">
                        <h1 className=" text-center m-3">¿Tiene poco lenguaje, utiliza solo frases u oraciones cortas?</h1>
                        <div className="h-[8rem] flex flex-col justify-start ">

                            <article className="flex   mb-1  items-center w-[15rem] justify-between h-[2rem] relative">
                            <input type="checkbox" name="Answer" id="YesAnswerQ6"  value={Answers.Si}
                             onChange={(event)=>setQuestions(event,Formkeys.Question6,'6')} />
                            <label  className={styles.CheckboxLabel} htmlFor="YesAnswerQ6">Si</label>
                        </article>

                        <article className="flex   mb-1  items-center w-[15rem] justify-between h-[2rem] relative">
                            <input type="checkbox" name="Answer" id="NoAnswerQ6"  value={Answers.No}
                             onChange={(event)=>setQuestions(event,Formkeys.Question6,'6')} />
                            <label  className={styles.CheckboxLabel} htmlFor="NoAnswerQ6">No</label>
                        </article>
                        </div>
                        
                 </article>
                    
                </section>
             </div>
             <button className="absolute bottom-0 bg-blue right-0 h-12 w-32 rounded-full text-[#FFFFFF] " onClick={preConfirmChanges}>Guardar</button>
            {seeAlert.alert1&&<Alerts close={closeAlert} Cuestionario={CuestionarioAlerts.Confirm} submitFunction={submitForm}/>}
        </div>
    )
}
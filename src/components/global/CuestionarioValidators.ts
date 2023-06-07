const Regex = {
    FirstName:/^[a-zA-Z]+$/,
    LastName:/^[a-zA-Z]+$/,
    Age:/^\d+$/,
    number:/^\d+$/,
    CellphoneNumber:/^\+\d+$/
  };
  export enum Formkeys{
    Adult='Adult',
    Child='Child',
    Question1='Question1',
    Question2='Question2',
    Question3='Question3',
    Question4='Question4',
    Question5='Question5',
    Question6='Question6'
  }
  export enum Question{
    one='¿Alguien de la familia ha tenido dificultades en el desarrollo del lenguaje?',
    two='¿Presenta alguna dificultad en la pronunciación de algún fonema “r”, “l”, “d”, “t”?',
    three='¿En el establecimiento educativo han indicado que el niño o niña necesita mejorar su lenguaje?',
    four='¿Cuándo dice una palabra con “s”, la misma suena como si fuera “d”?',
    five='¿Cuándo dice una palabra con “r”, la misma suena como si fuera “l”?',
    six='¿Tiene poco lenguaje, utiliza solo frases u oraciones cortas?'
  }
  export enum Answers{
    initial='',
    Si='Si',
    No='No',
    Algunas_veces='Algunas veces',
    Sinestablecimiento='No se encuentra en ningún establecimiento educativo'
  }
  export enum  errormessages{
    General='Por favor revisa los errores',
    emptyfields='Revisa los campos vacios',
    emptyfield='Este campo no puede estar vacio',
    string='Debe contener solo letras',
    numbers='Debe contener solo numeros',
    options='Seleccione una opcion',
    PhoneNumber='Ingrese codigo de pais ej:(+54)'
  }  
  export enum Palabrasclaras{
    initial='',
    Option1='0 a 10',
    Option2='11 a 20',
    Option3='20 a 30',
    Option4='30 a 50',
    Option5='50 a 70',
  }
 export interface Adult{
    Name:string,
    Surname:string,
    PhoneNumber:string,
    Age:number,
    Answer?:Answers,
  }
 export interface Child{
    Name:string,
    Surname:string,
    CantidadPalabras:Palabrasclaras,
    Answer?:Answers,
  }
 export interface Question1{
    Question:Question.one,
    Answer:Answers,
    Detail?:string
  }
 export interface Question2{
    Question:Question.two,
    Answer:Answers,
  }
 export interface Question3{
    Question:Question.three,
    Answer:Answers,
  }
 export interface Question4{
    Question:Question.four,
    Answer:Answers,
  }
 export interface Question5{
    Question:Question.five,
    Answer:Answers,
  }
 export interface Question6{
    Question:Question.six,
    Answer:Answers,
  }

  
 export interface AdultErrors{
      Name?:errormessages.string|errormessages.emptyfield,
      Surname?:errormessages.string|errormessages.emptyfield,
      PhoneNumber?:errormessages.numbers|errormessages.emptyfield|errormessages.PhoneNumber,
      Age?:errormessages.numbers|errormessages.emptyfield
    }
   export interface ChildErrors{
        Name?:errormessages.string |errormessages.emptyfield,
        Surname?:errormessages.string|errormessages.emptyfield,
        CantidadPalabras?:errormessages.options,
    }
    export interface ERRORS{
    General?:errormessages.General,
    EmptyFields?:errormessages.emptyfields,
    AdultErrors?:AdultErrors,
    ChildErrors?:ChildErrors
    }
    export interface FormQuestions{
    Adult:Adult,
    Child:Child,
    Question1:Question1
    Question2:Question2
    Question3:Question3
    Question4:Question4
    Question5:Question5
    Question6:Question6
    }

    export const FormValidates=(form:FormQuestions):ERRORS=>{
        const errors:ERRORS={}
        
        if(!form.Adult.Name) errors.AdultErrors = {...errors.AdultErrors, Name:errormessages.emptyfield}
        if(!form.Adult.Surname) errors.AdultErrors = {...errors.AdultErrors, Surname:errormessages.emptyfield}
        if(!form.Adult.Age) errors.AdultErrors = {...errors.AdultErrors, Age:errormessages.emptyfield}
        if(!form.Adult.PhoneNumber) errors.AdultErrors = {...errors.AdultErrors, PhoneNumber:errormessages.emptyfield}
        if(typeof form.Adult.Name !=='string') errors.AdultErrors = {...errors.AdultErrors, Name:errormessages.string}
        if(typeof form.Adult.Surname !=='string') errors.AdultErrors = {...errors.AdultErrors, Surname:errormessages.string}
        if(!Regex.number.test(form.Adult.PhoneNumber.slice(1)) ) errors.AdultErrors = {...errors.AdultErrors, PhoneNumber:errormessages.numbers}
        if(!form.Adult.PhoneNumber.includes('+') ) errors.AdultErrors = {...errors.AdultErrors, PhoneNumber:errormessages.PhoneNumber}
        if(!Regex.Age.test(`${form.Adult.Age}`)) errors.AdultErrors={...errors.AdultErrors,Age:errormessages.numbers}

        if(!form.Child.Name)  errors.ChildErrors = {...errors.ChildErrors, Name:errormessages.emptyfield}    
        if(!form.Child.Surname) errors.ChildErrors = {...errors.ChildErrors, Surname:errormessages.emptyfield}
        if(!form.Child.CantidadPalabras) errors.ChildErrors = {...errors.ChildErrors, CantidadPalabras:errormessages.options}
        if(form.Child.CantidadPalabras===Palabrasclaras.initial) errors.ChildErrors = {...errors.ChildErrors, CantidadPalabras:errormessages.options}
        if(!Regex.FirstName.test(form.Child.Name)) errors.ChildErrors = {...errors.ChildErrors, Name:errormessages.string}
        if(typeof form.Child.Surname !=='string') errors.ChildErrors = {...errors.ChildErrors, Surname:errormessages.string}
         
        if(Object.entries(errors).length) errors.General=errormessages.General
       
        return errors
    }
    
    
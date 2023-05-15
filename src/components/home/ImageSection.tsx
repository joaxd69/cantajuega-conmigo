import React from 'react'
import styles from '../../styles/ImageSection.module.css'

interface ImageSectionProps {
  images: string;
  // content:boolean
}


const ImageSection = (props:ImageSectionProps) => {
  return (
    <div>
      <div className={styles.Container}>

          <div className={styles.SectionsContainer}>
            <section className={styles.Content}>
              <h1>ACERCA DE NOSOTROS</h1>
              <article>
                <p className={styles.TextAbout}>
                CantaJuega Conmigo ha sido creado a partir del interés por el desarrollo y
                estimulación oportuna de la primera infancia con dificultades de aprendizaje 
                y socialización debidos a una condición que afecta o altera su capacidad de hablar 
                y comunicar; con el afán de entender, acompañar y apoyar aquellos padres de familia
                que necesitan una guía, técnicas y herramientas profesionales para potenciar el 
                desarrollo de sus hijos e hijas, 
                </p>
              </article>
              
            </section>   
          
            <section className={styles.Content}>
              <section className={styles.Pasos}>
                
              </section>
            </section>
            <section  className={styles.Content}>
              <article>
                <p className={styles.TextAbout} style={{marginTop:'22%'}}>
                  hemos sido elegidos para entender, apoyar y crear 
                  juntos un mejor futuro para quienes ahora son el presente; a través del juego, el amor,
                  la música y el arte. Teniendo como sueño grupal proporcionar un novedoso método 
                  terapéutico especializado, con el más alto nivel en neuroeducación, música, arte y 
                  el modelado de video para la atención de niños y niñas con dificultades en 
                  el desarrollo del lenguaje y/o aprendizaje.
                </p>
              </article>
            </section>
          
          </div>
      </div>
    </div>
    
  )
}

export default ImageSection
import React from 'react'
import styles from '../../styles/Metodologia.module.css'

const Metodologia = () => {
  return (
    <div>
    <div className={styles.Container}>
      <div className={styles.TitleSection}>
      <h1 className={styles.Title}>METODOLOGIA</h1>
      </div>

      <div className={styles.ImageContainer}>
         <section>
            <h1>Imagen 1</h1>
         </section>

         <section>
              <h1>Imagen2</h1>
         </section>
      
      </div>
     
    </div>
    <div className={styles.Aux}></div>
    </div>
  )
}

export default Metodologia
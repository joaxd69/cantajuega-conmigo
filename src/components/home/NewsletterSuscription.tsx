import styles from '../../styles/NewsletterSuscription.module.css'
export default function NewsletterSuscription(){
    return(
        <div className={styles.Container}>
           <section className={styles.Text}>
            <p>Suscríbete ahora y recibe el boletín semanal con
                ¡materiales educativos, nuevos cursos, publicaciones interesantes,
                libros populares y mucho más!
            </p>
           </section>
            <div className={styles.FirstContainer}>
             <div className={styles.FormContainer}>
                  <section className={styles.FirstSection}>

            <h1 className={styles.Title}>INSCRÍBETE AHORA AL NEWSLETTER</h1>
            <span>Acompaña cada etapa de desarrollo de tu bebé</span>
          </section>

          <form action="" className={styles.Form}>
            <label htmlFor="">Nombre</label>
            <input type="text" />

            <label htmlFor="">Correo electrónico</label>
            <input type="text" />

            <label htmlFor="">Telefono</label>
            <input type="number" />
            <button>
              ENVIAR
            </button>
          </form>

        </div>

      </div>
    </div>
  )
}
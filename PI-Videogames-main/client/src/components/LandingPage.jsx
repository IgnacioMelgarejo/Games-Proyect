import { Link } from "react-router-dom";
import styles from "./CSS/LandingPage.module.css";


const LandingPage = () => {
  return (
    <main>
      <section className={styles['text-side']}>
        <h1>Play<br/>Masters</h1>
        <p className={styles.secondtext}>
          ¡Bienvenido a nuestra aplicación! 
        </p>
        <Link to="/home">
          <button>Go!</button>
        </Link>
      </section>
    </main>

  )
}

export default LandingPage
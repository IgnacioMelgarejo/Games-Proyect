import { Link } from "react-router-dom";
import img from './image/landing-image.png';
import styles from "./CSS/LandingPage.module.css";


const LandingPage = () => {
    return (
        <main>
        <section className={styles['text-side']}>
          <h1>Play<br />Masters</h1>
          <p>This is the most complete application for Games lovers. It will allow you to identify all your favorite game, manage them and created them in ways that you will never imagine. You can also see their statistics, anddata in general. The best app for any gamers out there</p>
          <Link to="/home">
            <button>Go!</button>
          </Link>
        </section>
        {/* <section className={styles['img-side']}>
          <img src={img} alt="Game.png" />
        </section> */}
      </main>
        
        //      <div className={s.backgroundImage}>
        //          <h1> GAMES PAGE</h1>
        //           <Link to="/home">
        //              <button>HOME</button>
        //          </Link>
        //  </div> 
    )
}

export default LandingPage
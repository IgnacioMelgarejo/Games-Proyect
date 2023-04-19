import React from "react";
import styles from "./CSS/Spinner.module.css";

function Spinner() {
  return(
    <div>
      <div className={styles["lds-dual-ring"]}></div>
     
    </div>
  )
}

export default Spinner;
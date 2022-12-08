import React from "react";

import styles from './button.module.css'

export const Button = ({label}) => {
  return <button className={styles.btn} 
            onClick={() => alert(`"A label desse botão é ${label}"`)}>
            {label}
         </button>
  
}

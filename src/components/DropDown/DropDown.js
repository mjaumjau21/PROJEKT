import React from 'react'
import styles from './DropDown.module.css';

function DropDown({onClearArray}) {
    return (
        <div class={styles.dropdown}>
        <button class={styles.dropbtn}>Sortiranje</button>
        
        <div class={styles.dropdowncontent}>
          <a onClick="#">Ocjena</a>
          <a onClick="#">Datum izdanja</a>
          
        </div>
      </div>
    )
}

export default DropDown

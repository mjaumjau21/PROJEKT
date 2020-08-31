import React from 'react'
import styles from './DropDown.module.css';

function DropDown({onClearArray , sortByRating ,sortByDate}) {
    return (
        <div class={styles.dropdown}>
        <button class={styles.dropbtn}>Sortiranje</button>
        
        <div class={styles.dropdowncontent}>
          <a onClick={sortByRating}>Ocjena</a>
          <a onClick={sortByDate}>Datum izdanja</a>
          
        </div>
      </div>
    )
}

export default DropDown

import React from 'react';
import styles from './Favorite.module.css';

const Favorite = (favorites) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Najdrazi film</h4>
      <div className={styles.favorites} >
		    <h3>{favorites.Title}</h3>

	
		</div>
   
    </div>
  );
}



export default Favorite;

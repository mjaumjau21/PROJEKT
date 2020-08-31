import React from 'react'
import styles from './Favorite.module.css'
import Result from '../Result/Result'
import Results from '../Results/Results'
import PropTypes from 'proptypes'


const Favorite = (props,{selected},result,results) => {
    return (
        <div>
             <h4 className={styles.title}>Najdraži filmovi</h4>
             <section className={styles.results}>
			
		</section>
        </div>
    )
}
Favorite.propTypes = {
    favorite: PropTypes.array,
  }


export default Favorite

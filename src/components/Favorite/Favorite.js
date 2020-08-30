import React from 'react'
import styles from './Favorite.module.css'
import Result from '../Result/Result'
import Results from '../Results/Results'
import PropTypes from 'proptypes'


const Favorite = (props) => {
    return (
        <div>
             <h4 className={styles.title}>Favorite users</h4>
        
        </div>
    )
}
Favorite.propTypes = {
    favorite: PropTypes.array,
  }


export default Favorite

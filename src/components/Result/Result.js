import React from 'react'
import styles from './Result.module.css';

function Result({ result, openPopup }) {
	return (<div>
		<div className={styles.result} onClick={() => openPopup(result.imdbID)}>
			<img src={result.Poster} />
			<h3>{result.Title}</h3>
			
	
		</div>
	
		</div>
	)
}

export default Result
import React from 'react'
import styles from './Result.module.css';

function Result({ result, openPopup }) {
	return (
		<div className={styles.result} onClick={() => openPopup(result.imdbID)}>
			<img src={result.Poster} />
			<h3>{result.Title}</h3>
		</div>
	)
}

export default Result
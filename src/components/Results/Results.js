import React from 'react'
import styles from './Results.module.css';
import Result from '../Result/Result'

function Results ({ results, openPopup }) {
	if(!results) return(<div>Nema filmova</div>)
	return (
		<section className={styles.results}>
			{results.map(result => (
				<Result key={result.imdbID} result={result} openPopup={openPopup} />
			))}
		</section>
	)
}

export default Results

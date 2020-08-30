import React from 'react'
import styles from './Popup.module.css';
import PropTypes from 'prop-types';

function Popup({ selected, closePopup ,addFavorite,props }) {
	return (
		<div className={styles.popup}>
			<div className={styles.content}>
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				<p className="rating">Rating: {selected.imdbRating}</p>
				<div className="plot">
					<img src={selected.Poster} />
					<p>{selected.Plot}</p>
				</div>
				<button className={styles.close} onClick={event =>  window.location.href=`https://www.imdb.com/title/${selected.imdbID}`}>View</button>
				<button className={styles.close} onClick={() => props.addFavorite(props.result.id)}>Make favorite
				</button>
				<button className={styles.close} onClick={closePopup}>Close</button>
			</div>
		</div>
	)
}

export default Popup

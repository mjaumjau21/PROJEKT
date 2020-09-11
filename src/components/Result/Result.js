import React from 'react'
import styles from './Result.module.css';
import { removeCard, bookmarkCard } from '../../redux/actions';
import PropTypes from 'prop-types';

function Result({ result, openPopup },props) {
	return (<div>
		<div className={styles.result} onClick={() => openPopup(result.imdbID)}>
			<img src={result.Poster} />
			<h3>{result.Title}</h3>
			<button className={styles.favoriteBttn} onClick={() => this.props.actions.bookmarkCard(props.result.imdbID)}>&#9734;</button>

	
		</div>
	
		</div>
	)
}

export default Result
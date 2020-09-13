import React from 'react'
import styles from './Popup.module.css';
import PropTypes from 'prop-types';
import Favorite from '../Favorite/Favorite';
import { removeCard, bookmarkCard } from '../../redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cardFav from '../cardFav/cardFav';





function Popup({ selected, closePopup ,odabraniFilm },props) {
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
				<button className={styles.close} onClick={() => odabraniFilm(selected.imdbID)}>Make favorite
				</button>
				<button className={styles.favoriteBttn} onClick={() => props.actions.bookmarkCard(props.selected.imdbID)}>&#9734;</button>

				<button className={styles.close} onClick={closePopup}>Close</button>
			</div>
		</div>
	)
}

function mapDispatchToProps(dispatch) {
	return {
	  actions: bindActionCreators(
		{
		  bookmarkCard
		},
		dispatch
	  )
	};
  }
  Popup.propTypes = {
	index: PropTypes.number.isRequired,
	card: PropTypes.object,
  }

  
  
  export default connect(
	null,
	mapDispatchToProps
  )(Popup);
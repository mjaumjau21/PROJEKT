import React from 'react'
import styles from './Result.module.css';
import { removeCard, bookmarkCard } from '../../redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


function Result({ result, openPopup }) {
	return (<div>
		<div className={styles.result} onClick={() => openPopup(result.imdbID)}>
			<img src={result.Poster} />
			<h3>{result.Title}</h3>

	
		</div>
	
		</div>
	)
}


function mapDispatchToProps(dispatch) {
	return {
	  actions: bindActionCreators(
		{
		  removeCard,
		  bookmarkCard
		},
		dispatch
	  )
	};
  }
  

export default connect(
	null,
	mapDispatchToProps
  )(Result);
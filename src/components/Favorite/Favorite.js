import React from 'react'
import styles from './Favorite.module.css';
import Result from '../Result/Result'
import PropTypes from 'prop-types';

function Favorite ({favorite},props) {
	return (
		<section className={styles.results}>
			<h2>Najdrazi filmovi</h2>
			{props.cards.map((card) => (
        <img key={card.id} src={card.avatar_url} className={styles.avatar} alt="avatar" />
      ))}
		</section>
	)
}

export default Favorite

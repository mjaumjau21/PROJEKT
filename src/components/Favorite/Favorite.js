import React from 'react';
import styles from './Favorite.module.css';
import PropTypes from 'prop-types';

const Favorite = (props) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Najdrazi film</h4>
      {((card) => (
        <img key={card.Title} src={card.Poster} className={styles.avatar} alt="avatar" />
      ))}
    </div>
  );
}

Favorite.propTypes = {
  cards: PropTypes.array,
}

export default Favorite;

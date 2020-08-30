import React from 'react';
import styles from './Sidebar.module.css';
import Search from '../Search/Search';
import Favorite from '../Favorite/Favorite';
import PropTypes from 'prop-types';
import proptypes from 'proptypes';

const Sidebar = ({handleInput,search} , props) => {
  return (
    <aside className={styles.sidebar}>
      <h4 className={styles.title}>Search movie</h4>
      <Search handleInput={handleInput} search={search}/>
      <Favorite favorite={props.favorite}/>
    
    </aside>
  );
}


export default Sidebar;

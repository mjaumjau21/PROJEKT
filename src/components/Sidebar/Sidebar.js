import React from 'react';
import styles from './Sidebar.module.css';
import Search from '../Search/Search';
import Favorite from '../Favorite/Favorite';
import PropTypes from 'prop-types';
import proptypes from 'proptypes';
import Form from '../Form/Form';



const Sidebar = ({handleInput,search} , props ,handleSubmit, handleChange) => {
  return (
    <aside className={styles.sidebar}>
      <h4 className={styles.title}>Unesi ime filma </h4>

      <Search handleInput={handleInput} search={search}/>
      <hr></hr>
      <Favorite favorite={props.favorite}/>
      <hr></hr>
      <h1 className={styles.title}>Unesi email za primanje obajesti o prikazivanju omiljenih filmova u kinu</h1>
      <Form handleSubmit={handleSubmit} handleChange={handleChange}/>
    
      
    </aside>
  );
}


export default Sidebar;

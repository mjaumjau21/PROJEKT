import React from 'react';
import styles from './Sidebar.module.css';
import Search from '../Search/Search';
import PropTypes from 'prop-types';
import Form from '../Form/Form';




const Sidebar = ({handleInput,search} , props ,handleSubmit, handleChange) => {
  
  return (
    <aside className={styles.sidebar}>
      <h4 className={styles.title}>Unesi ime filma </h4>

      <Search handleInput={handleInput} search={search} />
      <hr></hr>   
      <h1>Najdrazi film</h1>   
      <hr></hr>
      <h1 className={styles.title}>Unesi email za primanje obajesti o prikazivanju omiljenih filmova u kinu</h1>
      <Form handleSubmit={handleSubmit} handleChange={handleChange}/>
    
      
    </aside>
  );
}

Sidebar.prototype={
  cards: PropTypes.array,
}


export default Sidebar;

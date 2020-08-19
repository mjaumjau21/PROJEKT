import React from 'react';
import styles from './Sidebar.module.css';
import Search from '../Search/Search';

const Sidebar = ({handleInput,search}) => {
  return (
    <aside className={styles.sidebar}>
      <h4 className={styles.title}>Search movie</h4>
      <Search handleInput={handleInput} search={search}/>

    </aside>
  );
}

export default Sidebar;

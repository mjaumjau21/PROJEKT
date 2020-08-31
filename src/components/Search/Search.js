import React from 'react';
import styles from './Search.module.css';

const Sidebar = ({handleInput,search}) => {
  return (
    <div>
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Traži . . ."
        onChange={handleInput}
        onKeyPress={search}
      />
    </div>
    
  </div>
  );
}

export default Sidebar;

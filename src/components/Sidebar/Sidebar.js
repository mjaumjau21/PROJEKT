import React from "react";
import styles from "./Sidebar.module.css";
import Search from "../Search/Search";
import PropTypes from "prop-types";

const Sidebar = ({ handleInput, search, favorites, removeItem }) => {
  console.log("INIT SIDEBAR", favorites)
  return (
    <aside className={styles.sidebar}>
      <h4 className={styles.title}>Unesi ime filma </h4>

      <Search handleInput={handleInput} search={search} />
      <hr></hr>
      <h1>Najdrazi film</h1>
      <aside>
        {favorites.map((favorites) => (
          <li key={favorites} {...favorites}>
            {favorites.Title}{" "}
            <img src={favorites.Poster} width="35" height="35" alt="avatar" />
            <button onClick={() => removeItem(favorites.Title)}>-</button>
          </li>
        ))}
      </aside>
      <hr></hr>
      <h1 className={styles.title}>
        Unesi email za primanje obajesti o prikazivanju omiljenih filmova u kinu
      </h1>
    </aside>
  );
};

Sidebar.prototype = {
  cards: PropTypes.array,
};

export default Sidebar;

import React, { useState } from "react";
import styles from "./App.module.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import Results from "../Results/Results";
import Popup from "../Popup/Popup";
import DropDown from "../DropDown/DropDown";

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    result: [],
    favorites: [],
    selected: {},
  });
  const [error, setError] = useState(null);
  const apiurl = "http://www.omdbapi.com/?apikey=dfe6d885";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;
        if (!results) {
          setError(true);
        }

        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const openPopup = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const onClearArray = () => {
    setState((prevState) => {
      return { ...prevState, results: [] };
    });
  };

  const sortByRating = ({ Result }) => {
    const results = [].concat(state.results);
    results
      .sort((a, b) => (a.imdbRating > b.imdbRating ? 1 : -1))
      .map((result) => <div key={result.imdbID}>result={result}</div>);
    setState((prevState) => {
      return { ...prevState, results: results };
    });
  };

  const sortByRunTime = ({ Result }) => {
    const results = [].concat(state.results);
    results
      .sort((a, b) => (a.Runtime > b.Runtime ? 1 : -1))
      .map((result) => <div key={result.imdbID}>result={result}</div>);
    setState((prevState) => {
      return { ...prevState, results: results };
    });
  };

  const sortByDate = ({ Result }) => {
    const results = [].concat(state.results);
    results
      .sort((a, b) => (a.Year > b.Year ? 1 : -1))
      .map((result) => <div key={result.imdbID}>result={result}</div>);
    setState((prevState) => {
      return { ...prevState, results: results };
    });
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  const odabraniFilm = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);
      state.favorites.push(result);
    });
  };
  const removeItem = (title) => {
    console.log("before", state.favorites);

    // state.favorites.slice(0,1);
    setState({ favorites: state.favorites.filter((f) => f.Title !== title) });
    console.log(state.favorites);
  };
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.containerFlex}>
        <Sidebar
          removeItem={removeItem}
          favorites={state.favorites}
          handleInput={handleInput}
          search={search}
        />
        <Results
          results={state.results}
          openPopup={openPopup}
          odabraniFilm={odabraniFilm}
        />
        <DropDown
          onClearArray={onClearArray}
          sortByRunTime={sortByRunTime}
          sortByRating={sortByRating}
          sortByDate={sortByDate}
        />
        <div></div>

        {typeof state.selected !== "undefined" && typeof state.selected.Title !== "undefined" ? (
          <Popup
            selected={state.selected}
            closePopup={closePopup}
            odabraniFilm={odabraniFilm}
          />
        ) : (
          false
        )}
      </div>
    </div>
  );
}

export default App;

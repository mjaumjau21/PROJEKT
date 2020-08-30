import React, { useState } from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import Results from '../Results/Results'
import Popup from '../Popup/Popup';
import DropDown from '../DropDown/DropDown';


function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    favorite: [],
    selected: {}
    
    
  });
  const apiurl = "http://www.omdbapi.com/?apikey=dfe6d885";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }

 
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const addFavorite = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);
     });
     if (this.state.favorite.some(result => result.id === id)) {
      this.setState(prevState => ({
        favorite: prevState.favorite.filter(result => result.id !== id),
      }));
    } else {
      this.setState(prevState => ({
        favorite: prevState.favorite.concat(prevState.result.find(result => result.id === id)),
      }));
    }
    
  }
  
  const onClearArray = () => {
    setState(prevState => {
      return { ...prevState, results: []}
    });
  };

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  
    return (
      <div className={styles.container}>
        <Header />
        <div>
        <button type="button" onClick={onClearArray}>
          Clear Array
        </button>
        </div>
        <div className={styles.containerFlex}>
          <Sidebar handleInput={handleInput} search={search} />
          <Results results={state.results} openPopup={openPopup} />
          <DropDown />

        
          {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
          
        </div>
      </div>
    );
  }


export default App;

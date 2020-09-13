import React, { useEffect,useState } from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import Results from '../Results/Results'
import Popup from '../Popup/Popup';
import DropDown from '../DropDown/DropDown';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCards } from "../../services";
import { addCards} from "../../redux/actions"
import {useDispatch } from 'react-redux';




function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    favorites: [
      {
        "Title":"Guardians of the Galaxy Vol. 2",
        "Poster":"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"   
      }
    ],
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
  const dispatch = useDispatch();

  const fetchData = async () => {
    const json = await getCards();
    dispatch(addCards(json));

  };


  useEffect(() => {
    
  });
  


  const addFavorite = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);
     });
     if (state.favorite.some(result => result.id === id)) {
      this.setState(prevState => ({
        favorite: prevState.favorite.filter(result => result.id !== id),
      }));
    } else {
      setState(prevState => ({
        favorite: prevState.favorite.concat(prevState.result.find(result => result.id === id)),
      }));
    }
    
  }
  
  const onClearArray = () => {
    setState(prevState => {
      return { ...prevState, results: [] }
    });
  };

  const sortByRating = ({Result}) => {
    
    const results = [].concat(state.results)
    results.sort((a,b) => a.imdbRating > b.imdbRating ? 1: -1).map(result =>(
  <div key={result.imdbID}>result={result}</div>))
  setState(prevState => {
    return { ...prevState, results: results }
  });
  };

  const sortByDate = ({Result}) => {
    
    const results = [].concat(state.results)
    results.sort((a,b) => a.Year > b.Year ? 1: -1).map(result =>(
  <div key={result.imdbID}>result={result}</div>))
  setState(prevState => {
    return { ...prevState, results: results }
  });
  };

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }
  
  const addToFav = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const zeljeniFilm = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const odabraniFilm = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);
      
      
   
       }).put(`http://localhost:5000/card`,id);
  }
  
  

 
  
    return (
       
      <div className={styles.container}>
        <Header/>
        <div>
        
        </div>
        <div className={styles.containerFlex}>
          <Sidebar   handleInput={handleInput} search={search} />
          <Results results={state.results}  openPopup={openPopup} odabraniFilm={odabraniFilm}  />
          <DropDown onClearArray={onClearArray} sortByRating={sortByRating} sortByDate={sortByDate} />
          <div >
          
          </div>
        
          {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} odabraniFilm={odabraniFilm}/> : false}
          
        </div>
      </div>
    );
  }

  function mapStateToProps(state) {
    return {
    
      bookmarkedCards: state.cards.bookmarkedCards
    };
  }

  export default connect(mapStateToProps)(App);

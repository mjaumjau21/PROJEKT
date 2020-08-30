import { ADD_CARDS, ADD_CARD, REMOVE_CARD, EDIT_CARD, FILTER_CARDS, BOOKMARK_CARD } from '../actions';

const initialState = {
  cards: [],
  filteredCards: [],
  bookmarkedCards: []
};

function addCards(state, action) {
  return {
    ...state,
    cards: [...state.cards, ...action.payload],
    filteredCards: [...state.filteredCards, ...action.payload]
  };
}

function addCard(state, action) {
  return {
    ...state,
    cards: [...state.cards, action.payload],
    filteredCards: [...state.filteredCards, action.payload]
  };
}

function removeCard(state, action) {
  return {
    ...state,
    cards: [
      ...state.cards.slice(0, action.payload),
      ...state.cards.slice(action.payload + 1)
    ],
    filteredCards: [
      ...state.filteredCards.slice(0, action.payload),
      ...state.filteredCards.slice(action.payload + 1)
    ],
  };
}

function editCard(state, action) {
  const index = state.cards.findIndex(c => c.id === action.payload.id);
  const indexF = state.filteredCards.findIndex(c => c.id === action.payload.id);

  return {
    ...state,
    cards: [
      ...state.cards.slice(0, index),
      action.payload,
      ...state.cards.slice(index + 1)
    ],
    filteredCards: [
      ...state.filteredCards.slice(0, indexF),
      action.payload,
      ...state.filteredCards.slice(indexF + 1)
    ],
  };
}

function filterCards(state, action) {
  return Object.assign({}, state, {
    filteredCards: state.cards.filter(
      card =>
        card.name.toLowerCase().search(action.payload.toLowerCase()) !== -1
    )
  });
}

function bookmarkCard(state, action) {
  if (state.bookmarkedCards.some(card => card.id === action.payload)) {
    return {
      ...state,
      bookmarkedCards: state.bookmarkedCards.filter(card => card.id !== action.payload)
    };
  } else {
    return {
      ...state,
      bookmarkedCards: state.bookmarkedCards.concat(state.cards.find(card => card.id === action.payload)),
    };
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CARDS:
      return addCards(state, action);

    case ADD_CARD:
      return addCard(state, action);
    
    case REMOVE_CARD:
      return removeCard(state, action);
    
    case EDIT_CARD:
      return editCard(state, action);

    case FILTER_CARDS:
      return filterCards(state, action);

    case BOOKMARK_CARD:
      return bookmarkCard(state, action);

    default:
      return state;
  }
}
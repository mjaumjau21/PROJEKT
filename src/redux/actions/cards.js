import { createAction } from '../../utils/action-helpers';

export const ADD_CARDS = "ADD_CARDS";
export const addCards = createAction(ADD_CARDS);

export const ADD_CARD = 'ADD_CARD';
export const addCard = createAction(ADD_CARD);

export const REMOVE_CARD = "REMOVE_CARD";
export const removeCard = createAction(REMOVE_CARD);

export const EDIT_CARD = "EDIT_CARD";
export const editCard = createAction(EDIT_CARD);

export const FILTER_CARDS = "FILTER_CARDS";
export const filterCards = createAction(FILTER_CARDS);

export const BOOKMARK_CARD = "BOOKMARK_CARD";
export const bookmarkCard = createAction(BOOKMARK_CARD);

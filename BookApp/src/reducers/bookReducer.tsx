import {
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE,
    BookActionTypes,
    State,
  } from '../actions/types';
  
  export const initialState: State = {
    books: [],
    loading: false,
    error: '',
  };
  
  const bookReducer = (state = initialState, action: BookActionTypes): State => {
    switch (action.type) {
      case FETCH_BOOKS_REQUEST:
        console.log('bookReducer Reqest');
        return {
          ...state,
          loading: true,
        };
      case FETCH_BOOKS_SUCCESS:
        console.log('bookReducer Success');
        return {
          ...state,
          books: action.payload,
          loading: false,
          error: '',
        };
      case FETCH_BOOKS_FAILURE:
        console.log('bookReducer Failed');
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default bookReducer;  
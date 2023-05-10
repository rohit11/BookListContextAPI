import { Dispatch } from 'react';
import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  BookActionTypes,
} from './types';
import BookService from '../services/BookService';
import { Book } from '../models/Book';

export const fetchBooks = () => async (dispatch: Dispatch<BookActionTypes>) => {
  console.log('Book Action FETCH_BOOKS_REQUEST');
  dispatch({ type: FETCH_BOOKS_REQUEST });

  try {
    const data: Book[] = await BookService.fetchBooks();
    console.log('Book Action FETCH_BOOKS_SUCCESS');
    dispatch({ type: FETCH_BOOKS_SUCCESS, payload: data });
  } catch (error: any) {
    console.log('Book Action FETCH_BOOKS_FAILURE');
    dispatch({ type: FETCH_BOOKS_FAILURE, payload: error.message });
  }
};




export interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
    imageUrl: string;
  }
  
  export interface State {
    books: Book[];
    loading: boolean;
    error: string;
  }
  

  export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
  export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
  export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';
  
  export interface FetchBooksRequestAction {
    type: typeof FETCH_BOOKS_REQUEST;
  }
  
  export interface FetchBooksSuccessAction {
    type: typeof FETCH_BOOKS_SUCCESS;
    payload: Book[];
  }
  
  export interface FetchBooksFailureAction {
    type: typeof FETCH_BOOKS_FAILURE;
    payload: string;
  }
  
  export type BookActionTypes =
    | FetchBooksRequestAction
    | FetchBooksSuccessAction
    | FetchBooksFailureAction;  
  

  
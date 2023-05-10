import React, { useReducer } from 'react';
import bookReducer, { initialState } from '../reducers/bookReducer';
import { fetchBooks } from '../actions/bookActions';
import { Book } from '../models/Book';

type BookState = {
  books: Book[],
  loading: boolean,
  error: string
};

type BookContextType = {
  state: BookState,
  fetchBooks: () => Promise<void>
};

export const BookContext = React.createContext<BookContextType>({
  state: initialState,
  fetchBooks: () => Promise.resolve()
});

type Props = {
  children: React.ReactNode;
};

const BookContextProvider: React.FC<Props> = ({ children }) => {
  console.log('BookContextProvider called');
  const [state, dispatch] = useReducer(bookReducer, initialState);

  const fetchBooksHandler = async () => {
    console.log('BookContextProvider fetchBooksHandler called');
    await fetchBooks()(dispatch);
  };

  return (
    <BookContext.Provider value={{ state, fetchBooks: fetchBooksHandler }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;

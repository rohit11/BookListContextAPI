import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Book } from '../models/Book';
import { BookContext } from '../context/BookContext';
import BookItem from './BookItem';
import Loader from './Loader';

const BookList = () => {
  const { state, fetchBooks } = useContext(BookContext);
  const { books, loading, error } = state;

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) {
    console.log('Book List loading');
    return <Loader />;
  }

  if (error) {
    console.log('Book List error');
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  console.log('Book List Success with books count ' + books.length);
  return (
    <FlatList
      scrollEnabled =  {true}
      data={books}
      renderItem={({ item }: { item: Book }) => <BookItem book={item} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  list: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100,
  },
});

export default BookList;

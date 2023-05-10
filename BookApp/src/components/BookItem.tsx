import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Book } from '../models/Book';

interface Props {
  book: Book;
}

const BookItem = ({ book }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>by {book.author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  author: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
});

export default BookItem;

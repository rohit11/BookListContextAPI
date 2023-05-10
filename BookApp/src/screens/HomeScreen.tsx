import React from 'react';
import { View, StyleSheet } from 'react-native';
import BookList from '../components/BookList';
import BookContextProvider from '../context/BookContext';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <BookContextProvider>
      <BookList />
      </BookContextProvider>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;

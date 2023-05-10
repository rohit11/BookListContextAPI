import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigations/AppNavigator';
import AppContextProvider from './src/context/AppContext';
import BookContextProvider from './src/context/BookContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppContextProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
      </AppContextProvider>
    </SafeAreaProvider>
  );
};

export default App;
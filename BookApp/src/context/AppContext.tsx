import React, { createContext, useReducer } from 'react';

type ContextProps = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

export const AppContext = createContext<ContextProps>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

type Props = {
  children: React.ReactNode;
};

const AppContextProvider: React.FC<Props> = ({ children }) => {
    console.log('AppContextProvider called');
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <AppContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;


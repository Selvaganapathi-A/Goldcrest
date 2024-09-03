import React from 'react';
// create Context
const ThemeContext = React.createContext('Dark');
const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

//
const UserContext = React.createContext('Vyshnavi');

export { ThemeContext, ThemeProvider, ThemeConsumer, UserContext };

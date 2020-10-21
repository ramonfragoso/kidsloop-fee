import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import { Container } from './style';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyle";
import { lightTheme, darkTheme } from "./theme"

function App() {
  
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (   
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles/>
        <Container>
          <LoginForm theme={theme} setTheme={setTheme}/>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;

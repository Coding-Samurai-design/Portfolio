// src/App.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import theme from './theme';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

import ContactMe from './components/ContactMe';
import DownloadResume from './components/DownloadResume';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <MainContent />
        
        <ContactMe />
        <DownloadResume />
      </div>
    </div>
  </ThemeProvider>
);

export default App;

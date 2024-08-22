import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';  
import About from './pages/About';
import MySkills from './pages/MySkills';
import Work from './pages/Work';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Container>
        <Sidebar />
        <ContentArea>
          <Routes>
            <Route path="/" element={<MainContent />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/myskills" element={<MySkills />} />
            <Route path="/work" element={<Work />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ContentArea>
      </Container>
    </Router>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #1e1e1e;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column; 
  }
`;

const ContentArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px; 
  }
`;

export default App;

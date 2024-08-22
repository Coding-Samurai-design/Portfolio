import React from 'react';
import styled from 'styled-components';
import ColoredText from './ColoredText';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import MyPhoto from '../assets/WhatsApp Image 2024-08-22 at 18.18.56_070f77d8.jpg'; 

const MainContent = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <Main>
      <ProfileImage src={MyPhoto} alt="Sagar Panigrahi" />
      <Title>
        Hi, I'm <ColoredText>Sagar Panigrahi</ColoredText>, <br />
        web developer
      </Title>
      <Subtitle>Front End Developer.</Subtitle>
      <Button text="Contact me!" onClick={handleContactClick} />
    </Main>
  );
};

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background: #1e1e1e;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export default MainContent;

import React from 'react';
import styled from 'styled-components';

const Button = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

const StyledButton = styled.button`
  margin-top: 20px;
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.3s ease;
  backdrop-filter: blur(15px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 255, 255, 0.4);
  -webkit-backdrop-filter: blur(15px);
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120%;
    height: 120%;
    background: linear-gradient(45deg, #00ff00, #00ffff);
    opacity: 0;
    transition: opacity 0.3s ease;
    transform: translate(-50%, -50%);
    border-radius: 50px;
    filter: blur(10px);
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    color: black;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 255, 255, 0.6);
  }

  &:active {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 255, 255, 0.6);
  }
`;

export default Button;

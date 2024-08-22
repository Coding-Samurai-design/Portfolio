import React from 'react';
import styled from 'styled-components';

const Button = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

const StyledButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: 2px solid #00ffff;
  background: transparent;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #00ffff;
    color: black;
  }
`;

export default Button;

import React from 'react';
import styled from 'styled-components';

const ColoredText = ({ children }) => {
  return <Text>{children}</Text>;
};

const Text = styled.span`
  color: #00ffff;
  text-shadow: 1px 1px #ff005a;
`;

export default ColoredText;

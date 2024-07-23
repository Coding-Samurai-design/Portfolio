
import React from 'react';
import styled from 'styled-components';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const DownloadContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
  display: inline-block;
  padding-bottom: 5px;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;  // Add margin top to space the button from the text
`;

const Button = styled.a`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  &:hover {
    background-color: darken(${({ theme }) => theme.colors.accent}, 10%);
  }
`;

const DownloadResume = () => (
  <DownloadContainer as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <Title>Download CV</Title>
    <ButtonWrapper>
      <Button href="/Resume.pdf" download>
        <FaDownload /> Download PDF
      </Button>
    </ButtonWrapper>
  </DownloadContainer>
);

export default DownloadResume;

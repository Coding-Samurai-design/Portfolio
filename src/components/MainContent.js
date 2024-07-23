import React from 'react';
import styled from 'styled-components';
import { FaDesktop, FaCode, FaMobileAlt, FaCamera } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MainContainer = styled.div`
  flex: 1;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
  display: inline-block;
  padding-bottom: 5px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

const IconWrapper = styled.div`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.iconColor};
  font-size: 24px;
`;

const MainContent = () => (
  <MainContainer>
    <Section>
      <Title>About Me</Title>
      <p>
        I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
      </p>
    </Section>
    <Section>
      <Title>What I'm Doing</Title>
      <CardGrid>
        <Card whileHover={{ scale: 1.05 }}>
          <IconWrapper><FaDesktop /></IconWrapper>
          <h3>Web Design</h3>
          <p>The most modern and high-quality design made at a professional level.</p>
        </Card>
        <Card whileHover={{ scale: 1.05 }}>
          <IconWrapper><FaCode /></IconWrapper>
          <h3>Web Development</h3>
          <p>High-quality development of sites at the professional level.</p>
        </Card>
        <Card whileHover={{ scale: 1.05 }}>
          <IconWrapper><FaMobileAlt /></IconWrapper>
          <h3>Mobile Apps</h3>
          <p>Professional development of applications for iOS and Android.</p>
        </Card>
        <Card whileHover={{ scale: 1.05 }}>
          <IconWrapper><FaCamera /></IconWrapper>
          <h3>Photography</h3>
          <p>I make high-quality photos of any category at a professional level.</p>
        </Card>
      </CardGrid>
    </Section>
    <Section>
      <Title>Testimonials</Title>
      <CardGrid>
        <Card whileHover={{ scale: 1.05 }}>
          <h3>Daniel Lewis</h3>
          <p>Richard was hired to create a corporate identity. We were very pleased with the work...</p>
        </Card>
        <Card whileHover={{ scale: 1.05 }}>
          <h3>Jessica Miller</h3>
          <p>Richard was hired to create a corporate identity. We were very pleased with the work...</p>
        </Card>
      </CardGrid>
    </Section>
    <Section>
      <Title>Clients</Title>
      <CardGrid>
        <Card whileHover={{ scale: 1.05 }}>
          <h3>Client 1</h3>
        </Card>
        <Card whileHover={{ scale: 1.05 }}>
          <h3>Client 2</h3>
        </Card>
        <Card whileHover={{ scale: 1.05 }}>
          <h3>Client 3</h3>
        </Card>
      </CardGrid>
    </Section>
  </MainContainer>
);

export default MainContent;

import React from 'react';
import styled from 'styled-components';

const MySkills = () => {
  return (
    <PageContainer>
      <Heading>My Skills</Heading>
      <Paragraph>
        Below is a list of my skills, tools, and technologies I use to create amazing web applications.
      </Paragraph>
      <SkillsGrid>
        <SkillCard>
          <SkillTitle>HTML5</SkillTitle>
        </SkillCard>
        <SkillCard>
          <SkillTitle>CSS3</SkillTitle>
        </SkillCard>
        <SkillCard>
          <SkillTitle>Bootstrap</SkillTitle>
        </SkillCard>
        <SkillCard>
          <SkillTitle>React.js</SkillTitle>
        </SkillCard>
        <SkillCard>
          <SkillTitle>JavaScript</SkillTitle>
        </SkillCard>
        <SkillCard>
          <SkillTitle>Git & GitHub</SkillTitle>
        </SkillCard>
      </SkillsGrid>
    </PageContainer>
  );
};


const PageContainer = styled.div`
  padding: 40px;
  color: white;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;


const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;


const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;


const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;


const SkillCard = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;


const SkillTitle = styled.h3`
  font-size: 1.5rem;
  color: #00ffff;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export default MySkills;

import React from 'react';
import styled from 'styled-components';

const Work = () => {
  
  const projects = [
    {
      title: 'Project One',
      description: 'This is a cafe website.',
      link: 'https://sagar33.netlify.app/',
    },
    {
      title: 'Project Two',
      description: 'This is an E-commerce hat store website.',
      link: 'https://myshop33.netlify.app/',
    },
    {
      title: 'Project Three',
      description: 'This is a Landing Page.',
      link: 'https://landingpage102.netlify.app/',
    },
    {
      title: 'Project Four',
      description: 'This is a website of our team for freelancing.',
      link: 'https://coding-samurai-blush.vercel.app/',
    },
  ];

  return (
    <PageContainer>
      <Heading>My Work</Heading>
      <Paragraph>Here are some of the projects I've worked on:</Paragraph>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectsGrid>
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


const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;


const ProjectCard = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;


const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #00ffff;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;


const ProjectDescription = styled.p`
  margin: 10px 0;
  font-size: 1rem;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;


const ProjectLink = styled.a`
  color: #00ffff;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 10px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export default Work;

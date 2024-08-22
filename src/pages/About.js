import React from 'react';
import styled from 'styled-components';
import MyPicture from '../assets/WhatsApp Image 2024-08-22 at 18.18.56_070f77d8.jpg'; 

const About = () => {
  return (
    <PageContainer>
      <ImageContainer>
        <ProfileImage src={MyPicture} alt="My Profile" />
      </ImageContainer>
      <TextContainer>
        <Heading>About Me</Heading>
        <Paragraph>
          Hi, I'm a web developer with a passion for creating modern, responsive websites and
          applications. With expertise in front-end development, I specialize in crafting interactive 
          and user-friendly interfaces. I'm proficient in React, JavaScript, and CSS, and I enjoy 
          building high-quality solutions that meet user needs.
        </Paragraph>
        
        <SectionHeading>Education</SectionHeading>
        <Paragraph>
          I hold a degree in Computer Science from Modern Engineering and Management Studies. Throughout my studies, I 
          focused on web development and user experience design, which ignited my interest in 
          front-end development.
        </Paragraph>

        
        <SectionHeading>Hobbies</SectionHeading>
        <Paragraph>
          When I'm not coding, I enjoy exploring new technologies, reading books on personal development,
          and hiking in nature. I also love playing cricket and watching  movies.
        </Paragraph>
      </TextContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px;
  color: white;
  max-width: 1000px;
  margin: 0 auto; /* Center the content */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack the image and text on smaller screens */
    padding: 20px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

const TextContainer = styled.div`
  flex: 2;
  padding-left: 40px;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #00ffff;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  margin-top: 30px;
  margin-bottom: 15px;
  color: #ff005a;
  border-bottom: 2px solid #00ffff;
  padding-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export default About;

import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    emailjs.send('service_pu18ijb', 'template_hyzeohp', formData, 'OA81em_YwZR2QWrOO')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
        
        setFormData({ name: '', email: '', message: '' });
      }, (err) => {
        console.log('FAILED...', err);
        alert('There was an error sending your message. Please try again.');
      });
  };

  return (
    <PageContainer>
      <Heading>Contact Me</Heading>
      <Subtitle>If you have any questions or inquiries, feel free to reach out!</Subtitle>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </FormContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  color: white;
  max-width: 1200px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  text-align: center;
  color: #ccc;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Input = styled.input`
  padding: 15px;
  font-size: 1rem;
  border: 2px solid #00ffff;
  border-radius: 5px;
  background: transparent;
  color: white;

  &:focus {
    outline: none;
    border-color: #ff005a;
  }
`;

const Textarea = styled.textarea`
  padding: 15px;
  font-size: 1rem;
  border: 2px solid #00ffff;
  border-radius: 5px;
  background: transparent;
  color: white;
  height: 150px;
  resize: none;

  &:focus {
    outline: none;
    border-color: #ff005a;
  }
`;

const SubmitButton = styled.button`
  padding: 15px;
  font-size: 1.2rem;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.3s ease;
  backdrop-filter: blur(15px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 255, 255, 0.4);
  -webkit-backdrop-filter: blur(15px);
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


export default Contact;

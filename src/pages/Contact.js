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
  background-color: #00ffff;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff005a;
    color: white;
  }
`;

export default Contact;

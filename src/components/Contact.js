import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../store/auth";
import Nav from "./Nav"
import Footer from './Footer';
import { useEffect } from 'react';


const MessageContainer = styled.div`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  max-width: 350px;
  margin-left: 35px;
  margin-top: 50px;
`;

const ContactContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  margin-top: 50px;
  margin-right: auto;
  margin-left: 600px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 3px;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 3px;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
  });
  const [userData,setuserData] = useState(true);
  const{user} = useAuth();

  useEffect(() => {
    if (userData && user) {
      setFormData({
        username: user.username,
        email: user.email,
        message: "",
      });
      setuserData(false);
    } else if (!user) {
      // Clear the form data if the user is not logged in
      setFormData({
        username: "",
        email: "",
        message: "",
      });
    }
  }, [userData, user]);

  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/form/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });


      if (response.ok) {

        showMessage("Message received successfully. We will reach out to you via email.");
        setTimeout(() => {
          navigate('/');
        }, 2000);
   
      } else {
        showMessage("There was an error submitting the form.");
      }
    } catch (error) {
      console.error('An error occurred:', error);
      showMessage("An unexpected error occurred.");
    }
  };

  return (
    <>
    <Nav/>
      {message && <MessageContainer>{message}</MessageContainer>}
      <ContactContainer style={{ marginBottom: '20px', marginLeft: '750px', marginRight: 'auto', marginTop: '10px' }}>
        <h2>Contact Us</h2>
        <form onSubmit={handleFormSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <FormLabel htmlFor="name">Name:</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <FormLabel htmlFor="message">Message:</FormLabel>
            <FormTextarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </ContactContainer>
      <Footer/>
    </>
  );
};

export default Contact;

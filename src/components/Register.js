import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../store/auth';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const RegisterContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  margin-top: 50px;
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

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
`;

const LoginLink = styled.div`
  margin-top: 15px;
  text-align: center;
`;

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const { storetokenInLS } = useAuth();
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const [error,seterror]=useState("");
  const [Success, setSuccess] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      seterror('Password  do not match');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setSuccess("Registration Success")
        console.log(data);
        console.log('Registration form submitted:', formData);
        storetokenInLS(data.token);
        setTimeout(() => {
          navigate('/');
        }, 2500);
      } else {
      
          // Handle other types of errors
          seterror('Please fill Input Fields Properly.');
        }
      
    } catch (error) {
      console.log(error);
      seterror('Please fill Input Fields Properly.');
    }
  };
  

  return (
    <>
      <RegisterContainer style={{ marginBottom: '20px', marginLeft: '750px' }}>
        <h2>Sign Up</h2>
        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
        {Success && <div style={{ color: 'Green', marginBottom: '10px' }}>{Success}</div>}
        <form onSubmit={handleFormSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <FormLabel htmlFor="username">Username:</FormLabel>
            <FormInput
              type="text"
              id="username"
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
            <FormLabel htmlFor="phone">Phone:</FormLabel>
            <FormInput
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <FormLabel htmlFor="password">Password:</FormLabel>
            <FormInput
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <FormLabel htmlFor="confirmPassword">Confirm Password:</FormLabel>
            <FormInput
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>
          <SubmitButton type="submit">Sign Up</SubmitButton>
        </form>
        <LoginLink>
          Already have an account? <NavLink to="/login">Login</NavLink>
        </LoginLink>
      </RegisterContainer>
      <Footer style={{ marginTop: '10px' }} />
    </>
  );
};

export default Register;
